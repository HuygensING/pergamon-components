import * as React from 'react';
export declare const buttonBackgroundColor = "#EEE";
export interface IButton {
    bare?: boolean;
    onClick: () => void;
    scale?: string;
    style: React.CSSProperties;
}
declare const Button: React.SFC<IButton>;
export default Button;
