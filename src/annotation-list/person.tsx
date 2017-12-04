import * as React from 'react'
import {IAnnotation} from "../interfaces";

const labelFromKey = (str: string) => {
	const index = str.lastIndexOf('.')
	const name = str.slice(0, index).split('.').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ')
	return `${name} (${str.slice(index + 1)})`
}

export interface IProps {
	annotation: IAnnotation
	rootAnnotation: IAnnotation
}
class Person extends React.PureComponent<IProps, null> {
	public render() {
		return (
			<div title={this.props.annotation.attributes.key}>
				<img
					style={{
						width: "12px",
						height:'auto',
						marginRight: '.2em',
					}}
					src="http://design.huygens.knaw.nl/static/icons/person.svg"
				/>
				{
					this.props.annotation.attributes.hasOwnProperty('key') ?
						labelFromKey(this.props.annotation.attributes.key) :
						this.props.rootAnnotation.text.slice(this.props.annotation.start, this.props.annotation.end)
				}
			</div>
		)
	}
}

export default Person