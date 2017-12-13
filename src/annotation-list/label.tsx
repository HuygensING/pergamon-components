import * as React from 'react'
import { IMAGE_BASE_DIR } from '../constants'
import ErrorLabel from './error-label'
import Annotation from '../models/annotation'

export interface IProps {
	annotation: Annotation
	rootAnnotation: Annotation
}
class Label extends React.PureComponent<IProps, null> {
	public render() {
		const imgBasename = this.props.annotation.type === 'persName' ? 'person' : 'location'

		return (
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'calc(12px + .2em) auto',
				}}
				title={this.props.annotation.attributes.get('key')}
			>
				<img
					style={{
						marginTop: '7px',
						width: "12px",
					}}
					src={`${IMAGE_BASE_DIR}/ui/${imgBasename}.svg`}
				/>
				{
					this.props.annotation.attributes.has('text') ?
						this.props.annotation.attributes.get('text') :
						<ErrorLabel {...this.props} />
				}
			</div>
		)
	}
}

export default Label