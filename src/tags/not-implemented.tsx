import * as React from 'react'
import { Tag } from '../interfaces'

const NotImplemented: Tag = (props) =>
	<div
		style={{
			backgroundColor: '#EC7700',
			color: 'white',
			padding: '2em 1.5em',
			margin: '1em -.5em',
			fontFamily: "'Roboto', sans-serif",
		}}
	>
		<div
			style={{
				fontWeight: 'bold',
				fontSize: '1.3em',
			}}
		>
			<div style={{ marginBottom: '1em' }}>
				<img
					style={{
						width:'2em',
						height: '2em',
						display: 'inline-block',
						verticalAlign: 'top',
					}}
					src="http://design.huygens.knaw.nl/static/icons/caution-inv.svg"
				/>
				<span
					style={{
						display: 'inline-block',
						fontSize: '1.5em',
						lineHeight: '1.5em',
						paddingLeft: '.5em',
						verticalAlign: 'top',
					}}
				>Warning</span>
			</div>
			{
				props.tags.hasOwnProperty(props.annotation.type) ?
					<span>
						The tag &lt;{props.annotation.type}&gt; is implemented,
						but the attributes are invalid:
						<pre>
							{JSON.stringify(props.annotation.attributes, null, 2)}
						</pre>
					</span> :
					<span>The tag &lt;{props.annotation.type}&gt; is not implemented!</span>
			}
		</div>
		<br/>
		Wrapped on: "<em>{props.children}</em>"
		<div
			style={{
				marginTop: '1em',
				fontStyle: 'italic',
			}}
		>
			This tag is not part of the Huygens ING TEI standard.
			Please visit
			{' '}<a
				style={{
					color: '#fff',
				}}
				href="http://servicedesk.huygens.knaw.nl"
				target="_blank"
			>
				Servicedesk.huygens.knaw.nl
			</a>{' '}
			to request support of this tag.
		</div>
	</div>

export default NotImplemented