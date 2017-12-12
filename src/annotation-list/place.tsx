import * as React from 'react'
import { Annotation } from '../index'

export interface IProps {
	annotation: Annotation
	rootAnnotation: Annotation
}
class Place extends React.PureComponent<IProps, null> {
	public render() {
		return (
			<div>
				<img
					style={{
						width: "12px",
						height:'auto',
						marginRight: '.2em',
					}}
					src="http://design.huygens.knaw.nl/static/icons/location.svg"
				/>
				{ this.props.rootAnnotation.text.slice(this.props.annotation.start, this.props.annotation.end) }
			</div>
		)
	}
}

export default Place