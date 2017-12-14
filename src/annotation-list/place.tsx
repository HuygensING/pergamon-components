import * as React from 'react'
import ErrorLabel from './error-label'
import { IMAGE_BASE_DIR } from '../constants';
import { IProps } from './label';

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
					src={`${IMAGE_BASE_DIR}/ui/location.svg`}
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