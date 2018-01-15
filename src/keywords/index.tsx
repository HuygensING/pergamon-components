import * as React from 'react'
import { blueFontStyle} from '../default-styles';
import { IKeyword } from '../models/annotation';

interface LiProps {
	keyword: string
	onClick: (keyword: string) => void
}
const Li: React.SFC<LiProps> = ({children, keyword, onClick}) =>
	<li
		onClick={() => onClick(keyword)}
		style={{ display: 'inline-block', marginRight: '.5em' }}
	>
		{children}
	</li>

export interface IKeywords {
	keywords: IKeyword[]
	onClickKeyword: (keyword: string) => void
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
					.map(k =>
						<Li
							key={k}
							keyword={k}
							onClick={props.onClickKeyword}
						>
							{k}
						</Li>
					)
			}
			{props.children}
		</ul>

	</section>

export default Keywords
