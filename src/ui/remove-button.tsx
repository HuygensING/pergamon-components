import * as React from 'react';
// import Button, {buttonBackgroundColor} from "./button";
// import styled from "styled-components";

// const messages = [
// 	'Really? :(',
// 	'Never coming back!',
// 	'Talk about it?',
// 	'Farewell...',
// 	'Go out with a BOOM!',
// ];

// const StyledButton = styled(Button)`
// 	background-color: ${(props: { confirm: boolean }) =>
// 		props.confirm ? 'red' : buttonBackgroundColor};
// 	color: ${(props: { confirm: boolean }) =>
// 		props.confirm ? 'white' : 'black'};
// 	padding: 0 1em;
// `;

export interface IProps {
	action: () => void;
	children: any;
	className?: string;
	scale?: string;
}

export interface IState {
	confirm: boolean;
}

class RemoveButton extends React.Component<IProps, IState> {
	public state = {
		confirm: false,
	};

	public render()	{
		return (
			null
			// <StyledButton
			// 	className={this.props.className}
			// 	confirm={this.state.confirm}
			// 	onClick={() => {
			// 		if (this.state.confirm) {
			// 			this.props.action();
			// 		} else {
			// 			this.setState({ confirm: true });
			// 		}
			// 	}}
			// 	scale={this.props.scale}
			// >
			// 	{
			// 		this.state.confirm ?
			// 			messages[Math.ceil(Math.random() * messages.length)] :
			// 			this.props.children
			// 	}
			// </StyledButton>
		)
	}
}

export default RemoveButton;
