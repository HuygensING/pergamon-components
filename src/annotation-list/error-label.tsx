import * as React from 'react'
import { IProps } from './label'

const ErrorLabel: React.SFC<IProps> = (props) =>
	<div style={{ display: 'inline-block' }}>
		<div>{props.rootAnnotation.text.slice(props.annotation.start, props.annotation.end)}</div>
		<div style={{ color: 'red', fontSize: '.8em' }}>Not identified</div>
	</div>

export default ErrorLabel