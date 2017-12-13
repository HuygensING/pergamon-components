import * as React from 'react'
import { IProps } from './label'

const ErrorLabel: React.SFC<IProps> = (props) =>
	<div style={{ display: 'inline-block' }}>
		<div>{props.rootAnnotation.text.slice(props.annotation.start, props.annotation.end)}</div>
		<div style={{ color: 'red', fontSize: '.8em' }}>No `text` attribute found!</div>
	</div>

export default ErrorLabel