import * as React from 'react'
import { ITagProps } from '../interfaces'
import { Span } from './system-tags';
import NotImplemented from './not-implemented'

export interface IState {
	expanded: boolean
}
class Choice extends React.PureComponent<ITagProps, IState> {
	public state = {
		expanded: false,
	}

	public render() {
		const defaultComp = <Span {...this.props} />
		if (!Array.isArray(this.props.node.children)) return defaultComp

		const sicCorr: boolean =  this.props.node.children.some(child => child.type === 'sic' || child.type === 'corr')
		if (sicCorr) return defaultComp

		const abbrExpan: boolean = this.props.node.children.some(child => child.type === 'abbr' || child.type === 'expan')
		if (abbrExpan) {
			return (
				<span
					id={this.props.node.id()}
					onClick={() => this.setState({ expanded: !this.state.expanded })}
					style={{ cursor: 'pointer' }}
				>
					<span style={{ color: 'gray' }}>{ this.state.expanded ? '»' : '«' }</span>
					{
						React.Children.map(this.props.children, (child) => {
							const cloned = React.cloneElement((child as any), { custom: this.state })
							return cloned
						})
					}
					<span style={{ color: 'gray' }}>{ this.state.expanded ? '«' : '»' }</span>
				</span>
			)
		}	

		return <NotImplemented {...this.props } />
	}
}

export default Choice
