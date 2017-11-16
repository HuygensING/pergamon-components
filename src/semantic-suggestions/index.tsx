import * as React from 'react'
import { fontStyle,grayLightBackground } from '../default-styles'
import Suggestion, { ISuggestion } from './suggestion';

const Wrapper: React.SFC<ISemanticSuggestions> = (props) =>
	<div
		style={{
			...fontStyle,
			...grayLightBackground,
			padding: props.semanticSuggestions.length > 0 ? '.5em' : 0,
		}}
	>
		{props.children}
	</div>

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
	requesting: boolean
	semanticSuggestions: ISuggestion[]
}
const SemanticSuggestions: React.SFC<ISemanticSuggestions> = (props) =>
	<Wrapper {...props}>
		{
			props.requesting &&
			<p
				style={{
					alignItems: 'center',
					display: 'grid',
					fontSize: '0.9em',
					gridTemplateColumns: '62px auto',
					justifyItems: 'center',
					padding: '.5em',
				}}
			>
				<img
					src="http://design.huygens.knaw.nl/static/icons/loader.svg"
					style={{
						height: 'auto',
						width: '30px',
					}}
				/>
				Generating semantic suggestions for better search results.
			</p>
		}
		{
			(props.semanticSuggestions.length > 0) &&
			<p>
				The ePistolarium has found {props.semanticSuggestions.length} terms that are used in the same context.
				You can add them to improve your search results:
			</p>
		}
		{
			(props.semanticSuggestions.length > 0) &&
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
		}
	</Wrapper>

export default SemanticSuggestions