import * as React from 'react'

export interface ISuggestion {
	text: string
	weight: number
}

export interface ISuggestionProps {
	onClick: (ev: any) => void
	suggestion: ISuggestion
}
export interface ISuggestionState {
	hover: boolean
}
class Suggestion extends React.Component<ISuggestionProps, ISuggestionState> {
	public state = {
		hover: false,
	}

	public render() {
		return (
			<li
				onClick={this.props.onClick}
				onMouseEnter={() => this.setState({ hover: true })}
				onMouseLeave={() => this.setState({ hover: false })}
				style={{

					color: this.state.hover ? '#ccc' : 'inherit',
					cursor: 'pointer',

				}}
			>
				{this.props.children} 
                <span 
                    style={{
                        color: '#bbb',
                        fontSize: '14px',
                    }}
                
                >({100 * this.props.suggestion.weight}%)</span>
			</li>
		)
	}
}

export default Suggestion