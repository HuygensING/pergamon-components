import * as React from 'react';
import Tooltip from 'hire-tooltip';
import { IGNORE_CLASSNAME } from "../constants";
import { ITag } from '../interfaces';
import RenderedText from '../rendered-text';

interface IAnchorComp {
	onClick: (ev: any) => void
	setRef: (el: Element) => void
}
const AnchorComp: React.SFC<IAnchorComp> = (props) =>
	<span
		className={IGNORE_CLASSNAME}
		onClick={props.onClick}
		ref={props.setRef}
		style={{
            fontFamily: "'Roboto', sans-serif",
			backgroundColor: '#fff',
            border: '1px solid #aaa',
			borderRadius: '50%',
			cursor: 'pointer',
			fontSize: '10px',
			marginLeft: '.2em',
            marginRight: '.4em',
			padding: '.5em .5em',
			verticalAlign: 'top',
		}}
	>
		{props.children}
	</span>

export interface IState {
	height: number
	left: number
	top: number
	width: number
}

const minLeft: number = 18
const tooltipWidth: number = 400

class Anchor extends React.Component<ITag, IState> {
	public state = {
		height: null,
		left: null,
		top: null,
		width: null,
	}

	public render() {
		const active = 
			this.props.activeAnnotation &&
			(this.props.activeAnnotation.id === this.props.annotation.id)

		let left: number = this.state.left - (tooltipWidth/2) + this.state.width/2
		let shift: number = .5 
		if (left < 0) {
			shift = .5 - ((left - minLeft) / -tooltipWidth)
			left = minLeft
		}

		let note;
		if (active) {
			note = this.props.root.children.find(a =>
				a.type === 'note' &&
				a.hasOwnProperty('attributes') &&
				a.attributes.n === this.props.activeAnnotation.attributes.n
			)
		}

		return (
			<span>
				<AnchorComp
					onClick={ev => {
						ev.stopPropagation()
						this.props.activateAnnotation(this.props.annotation)
					}}
					setRef={(el) => {
						if (active && el && this.state.top == null) {
							const { height, left, top, width } = el.getBoundingClientRect()
							this.setState({ height, left, top, width })
						}
					}}
				>
					{this.props.annotation.attributes.n}	
				</AnchorComp>
				{
					active &&
					<Tooltip
						shift={shift}
						style={{
							left,
							top: this.state.top + this.state.height + 16 + window.scrollY,
							width: `${tooltipWidth}px`,
                            
						}}
					>
						<RenderedText
							root={{
								...note,
								annotations: [note],
								children: [note],
								text: this.props.root.text
							}}
                           
							tags={this.props.tags}
						/>
					</Tooltip>
				}
			</span>
		)
	}
}

export default Anchor
