import * as React from 'react'

export const buttonBackgroundColor = '#EEE'

export interface IButton {
	bare?: boolean
	onClick: () => void
	scale?: string
	style: React.CSSProperties
}

const Button: React.SFC<IButton> = (props) =>
	<div
		style={{
			background: props.bare ? 'none' : buttonBackgroundColor,
			borderRadius: '3px',
			border: props.bare ? 'none' : '1px solid #DDD',
			cursor: 'pointer',
			display: 'inline-block',
			fontSize: props.scale ? `${props.scale}em` : '1em',	
			height: '1.5em',
			lineHeight: '1.5em',
			overflow: 'hidden',
			padding: '0 0.5em',
			textAlign: 'center',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			...props.style,
		}}
	>
		{props.children}
	</div>

export default Button
