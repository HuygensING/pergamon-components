import * as React from 'react'
import { fontStyle,grayLightBackground } from '../default-styles'
import Suggestion, { ISuggestion } from './suggestion';


const Suggestions: React.SFC = (props) =>
	<div
		style={{
            ...fontStyle,
            ...grayLightBackground,
			...{
			padding: '.5em',
            }
		}}
    >
        <img
        style={{
               width: '30px',
               height: 'auto'
              }}
            src="http://design.huygens.knaw.nl/static/icons/loader.svg"
        />
        
        Generating semantic suggestions for better search results.
        <br/>
        <br/>

        
        The ePistolarium has found 9 terms that are used in the same context. You can add them to improve your search results:
        <ul
            style={{
                listStyle: 'none',
                margin: '.5em 0 0 0',
                padding: 0,
            }}
        >
            {props.children}
        </ul>
    </div>

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