import * as React from 'react'
import { HucTooltip } from 'huc-ui-components'
import { IGNORE_CLASSNAME } from "../constants"
import { ITagProps } from '../interfaces'
import RenderedText from '../rendered-text'
import { fontStyle } from '../default-styles'
import Annotation from '../models/annotation'

interface IAnchorComp {
	id: string
	onClick: (ev: any) => void
	setRef: (el: Element) => void
}
const AnchorComp: React.SFC<IAnchorComp> = (props) =>
	<span
		className={IGNORE_CLASSNAME}
		id={props.id}
		onClick={props.onClick}
		ref={props.setRef}
		style={{
			...fontStyle,
			backgroundColor: '#fff',
			borderRadius: '50%',
			cursor: 'pointer',
			fontSize: '10px',
			marginLeft: '.2em',
			padding: '.5em .5em',
			verticalAlign: 'top',
			whiteSpace: 'nowrap',
            border: '1px solid #aaa',
			marginRight: '.4em',
		}}
	>
		{props.children}
	</span>


const minLeft: number = 18
const tooltipWidth: number = 400

export interface IState {
	active: boolean
	activeNote: Annotation
	height: number
	left: number
	top: number
	width: number
}
class Anchor extends React.Component<ITagProps, IState> {
	private el: Element
	public state = {
		active: false,
		activeNote: null,
		height: null,
		left: null,
		top: null,
		width: null,
	}

	componentDidMount() {
		const active = 
			this.props.activeAnnotation != null &&
			this.props.activeAnnotation.id === this.props.node.annotationId
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

		let noteAnnotation: Annotation
		if (this.state.active) {
			noteAnnotation = this.props.root.annotations.find(a =>
				a.type === 'note' &&
				a.hasOwnProperty('attributes') &&
				a.attributes.get('n') === this.props.activeAnnotation.attributes.get('n')
			)
			noteAnnotation = noteAnnotation.clone()
			noteAnnotation.annotations = [noteAnnotation]
			noteAnnotation.text = this.props.root.text
		} 

		return (
			<span>
				<AnchorComp
					id={this.props.node.id()}
					onClick={ev => {
						ev.stopPropagation()
						this.props.activateAnnotation(this.props.node.annotationId)
					}}
					setRef={(el) => {
						if (this.state.active && el && this.state.top == null) {
							this.el = el
							const { height, left, top, width } = el.getBoundingClientRect()
							this.setState({ height, left, top, width })
						}
					}}
				>
					{this.props.node.attributes.get('n')}	
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
							root={noteAnnotation}
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
