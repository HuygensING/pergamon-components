import * as React from 'react'
import { fontStyle } from '../default-styles'
import { Annotation } from '../index'

const MetadataList = (props) =>
	<ul
		ref={props.setRef}
		style={{
			color: '#888',
			listStyle: 'none',
			margin: 0,
			padding: 0,
			...fontStyle
		}}>
		{props.children}
	</ul>

const MetadataItem = (props) =>
	<li
		style={{
			marginBottom: '1em',
		}}>
		{props.children}
	</li>

const Label = (props) =>
	<label
		style={{
			// marginLeft: props.width < 700 ? 0 : '-65px',
			// position: props.width < 700 ? 'static' : 'absolute',
			marginLeft: '-65px',
			position: 'absolute',
			textAlign: 'right',
			width: '50px',
		}}
	>
		{props.children}
	</label>

const Bold = (props) =>
	<div style={{color: '#444', fontWeight: 700}}>{props.children}</div>

export interface IProps {
	rootAnnotation: Annotation
}
export interface IState {
	width: number
}
class Metadata extends React.PureComponent<IProps, IState> {
	public state = {
		width: null
	}

	public render() {
		return (
			<MetadataList
				setRef={(el) => {
					if (el == null) return
					this.setState({
						width: el.getBoundingClientRect().width
					})
				}}
			>
				<MetadataItem>
					<Label width={this.state.width}>FROM</Label>
					<div>
						<Bold>{this.props.rootAnnotation.metadata.get('sender')}</Bold>
						<div>{this.props.rootAnnotation.metadata.get('senderloc')}</div>
					</div>
				</MetadataItem>
				<MetadataItem>
					<Label width={this.state.width}>TO</Label>
					<div>
						<Bold>{this.props.rootAnnotation.metadata.get('recipient')}</Bold>
						<div>{this.props.rootAnnotation.metadata.get('recipientloc')}</div>
					</div>
				</MetadataItem>
				<MetadataItem>
					<Label width={this.state.width}>DATE</Label>
					<Bold>{this.props.rootAnnotation.metadata.get('date')}</Bold>
				</MetadataItem>
			</MetadataList>
		)
	}
}
export default Metadata
