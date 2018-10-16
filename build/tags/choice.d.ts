import * as React from 'react';
import { ITagProps } from '../interfaces';
export interface IState {
    expanded: boolean;
}
declare class Choice extends React.PureComponent<ITagProps, IState> {
    state: {
        expanded: boolean;
    };
    render(): JSX.Element;
}
export default Choice;
