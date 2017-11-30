import * as React from 'react';
import { HucTooltip } from 'huc-ui-components'
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
			backgroundColor: '#fff',
			borderRadius: '50%',
			cursor: 'pointer',
			fontSize: '10px',
			marginLeft: '.2em',
			padding: '.5em .5em',
			verticalAlign: 'top',
			whiteSpace: 'nowrap',
            border: '1px solid #aaa',
            fontFamily: "'Roboto', sans-serif",
            marginRight: '.4em',
		}}
	>
		{props.children}
	</span>


const minLeft: number = 18
const tooltipWidth: number = 400

export interface IState {
	active: boolean
	height: number
	left: number
	top: number
	width: number
}
class Anchor extends React.Component<ITag, IState> {
	private el: Element
	public state = {
		active: false,
		height: null,
		left: null,
		top: null,
		width: null,
	}

	componentDidMount() {
		const active = 
			this.props.activeAnnotation != null &&
			this.props.activeAnnotation.id === this.props.annotation.id
		this.setState({ active })
		if (active) window.addEventListener('resize', this.onResize)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onResize)	
	}

	public render() {
		let left: number = this.state.left - (tooltipWidth/2) + this.state.width/2
		let shift: number = .5 
		if (left < 0) {
			shift = .5 - ((left - minLeft) / -tooltipWidth)
			left = minLeft
		}

		let note;
		if (this.state.active) {
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
						if (this.state.active && el && this.state.top == null) {
							this.el = el
							const { height, left, top, width } = el.getBoundingClientRect()
							this.setState({ height, left, top, width })
						}
					}}
				>
					{this.props.annotation.attributes.n}	
				</AnchorComp>
				{
					this.state.active &&
					<HucTooltip
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
					</HucTooltip>
				}
			</span>
		)
	}

	private onResize = (ev) => {
		const { height, left, top, width } = this.el.getBoundingClientRect()
		this.setState({ height, left, top, width })
	}
}

export default Anchor
