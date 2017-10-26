import * as React from 'react';
import Tooltip from 'hire-tooltip';
import TextTree from "../rendered-text";
import { orangeLight, orangeRGB, IGNORE_CLASSNAME } from "../constants";
import tags from './index';
import { IAnnotation, ITag } from '../interfaces';


interface INoteNumber {
	active: boolean;
}

interface ISpan {
	active: boolean;
	isLast: boolean;
}

const noteNumberStyle: React.CSSProperties = {
	backgroundColor: '#DDD',
	borderRadius: '1em',
	cursor: 'pointer',
	fontSize: '10px',
	lineHeight: '1.9em',
	marginLeft: '0.2em',
	position: 'absolute',
	textAlign: 'center',
	width: '1.9em',
};

const spanStyle: React.CSSProperties = {
	backgroundColor: 'none',
	marginRight: '0.6em',
};

const tooltipStyle: React.CSSProperties = {
	fontSize: '16px',
	marginLeft: 'calc(-10vw + 8px)',
	marginTop: '16px',
	width: '20vw',
	zIndex: 1,
};

export interface INote extends ITag {
	activateNote: (a: IAnnotation) => void
	activeNoteId: string
}
const Note: React.SFC<INote> = (props) => {
	const isLast = ((
			!props.annotation.hasOwnProperty('_first') &&
			!props.annotation.hasOwnProperty('_segment') &&
			!props.annotation.hasOwnProperty('_last')
		) ||
		props.annotation._last
	);

	const active = props.activeNoteId === props.annotation.id;
	
	return (
		<span
			id={props.id}
			style={{spanStyle}}
		>
			{props.children}
			{
				isLast &&
				<div
					className={IGNORE_CLASSNAME}
					onClick={(ev) => {
						ev.stopPropagation();
						if (props.activateNote) props.activateNote(props.annotation)
					}}
					style={noteNumberStyle}
				>
					N
					{
						active &&
						<Tooltip
							borderColor="black"
						>
							<TextTree
								root={props.annotation}
								tags={tags}
							/>
						</Tooltip>
					}
				</div>
			}
		</span>
	)
};

export default Note;
