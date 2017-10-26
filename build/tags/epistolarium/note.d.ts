/// <reference types="react" />
import * as React from 'react';
import { ITag } from '../default-tags';
import { IAnnotation } from '../../interfaces';
export interface INote extends ITag {
    activateNote: (a: IAnnotation) => void;
    activeNoteId: string;
}
declare const Note: React.SFC<INote>;
export default Note;
