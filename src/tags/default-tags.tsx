import * as React from 'react';

export interface ITag {
	id: string;
}

export const Span: React.SFC<ITag> = ({children, id}) =>
	<span id={id}>{children}</span>;

export const Div: React.SFC<ITag> = ({children, id}) =>
	<div id={id}>{children}</div>;

export const None: React.SFC = () => null;