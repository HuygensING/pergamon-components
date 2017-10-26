import * as React from 'react';
import { IAnnotation } from '../interfaces';

export interface ITag {
	activeAnnotation: IAnnotation
	annotation: IAnnotation
	id: string
}

export const Span: React.SFC<ITag> = ({activeAnnotation, annotation, children, id}) =>
	<span id={id}>{children}</span>;

export const Div: React.SFC<ITag> = ({activeAnnotation, annotation, children, id}) =>
	<div id={id}>{children}</div>;

export const None: React.SFC = () => null;