import * as React from 'react'
import Suggestion, { ISuggestion } from './suggestion';

const Suggestions: React.SFC = (props) =>
	<ul
		style={{
			listStyle: 'none',
			margin: '.5em 0 0 0',
			padding: 0,
		}}
	>
		{props.children}
	</ul>

export interface ISemanticSuggestions {
	fullTextSearch: (q: string) => void
	semanticSuggestions: ISuggestion[]
}
const SemanticSuggestions: React.SFC<ISemanticSuggestions> = (props) =>
	<Suggestions>
		{
			props.semanticSuggestions.map(((s: ISuggestion) =>
				<Suggestion
					key={s.text}
					onClick={(ev) => props.fullTextSearch(s.text)}
					suggestion={s}
				>
					{s.text}
				</Suggestion>
			))
		}
	</Suggestions>

export default SemanticSuggestions