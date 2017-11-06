/// <reference types="react" />
import * as React from 'react';
export interface IProps {
    action: () => void;
    children: any;
    className?: string;
    scale?: string;
}
export interface IState {
    confirm: boolean;
}
declare class RemoveButton extends React.Component<IProps, IState> {
    state: {
        confirm: boolean;
    };
    render(): any;
}
export default RemoveButton;
