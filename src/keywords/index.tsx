import * as React from 'react'
import { blueFontStyle} from '../default-styles';
import { IKeyword } from '../models/annotation';

const Li: React.SFC = (props) =>
	<li style={{ display: 'inline-block', marginRight: '.5em' }}>
		{props.children}
	</li>

export interface IKeywords {
	keywords: IKeyword[]
}
const Keywords: React.SFC<IKeywords> = (props) =>
	<section>
		<h3
			style={{
				fontSize: '1em',
			}}
		>
			Keywords
		</h3>
		<ul
			style={{
				...blueFontStyle,
				margin: 0,
				padding: 0,
			}}
		>
			{
				props.keywords != null &&
				props.keywords
					.reduce((prev, curr) => { return prev.concat(curr.terms) }, [])
					.map(k => <Li key={k}>{k}</Li>)
			}
			{props.children}
		</ul>

	</section>

export default Keywords
