import * as React from 'react'
import { blueFontStyle} from '../default-styles';

const Li: React.SFC = (props) =>
	<li style={{ display: 'inline-block', marginRight: '.5em' }}>
		{props.children}
	</li>

export interface IKeywords {
	keywords: { weight: number, terms: string[] }[]
}
const Keywords: React.SFC<IKeywords> = (props) =>
	<section>
		<h3
		style={{
			fontSize: '1em',
		}}
		>Keywords</h3>
		<ul
			style={blueFontStyle}
		>
			{
				props.keywords &&
				props.keywords
					.reduce((prev, curr) => {
						return prev.concat(curr.terms)
					}, [])
					.map(k => <Li key={k}>{k}</Li>)
			}
			{props.children}
		</ul>

	</section>

export default Keywords
