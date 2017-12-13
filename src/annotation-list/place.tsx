import * as React from 'react'
import ErrorLabel, { IProps } from './error-label'

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
					src="/static/graphics/ui/location.svg"
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

export default Place