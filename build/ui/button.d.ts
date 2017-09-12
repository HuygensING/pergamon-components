/// <reference types="react" />
import { StyledComponentClass } from "styled-components";
export declare const buttonBackgroundColor = "#EEE";
export interface IButton {
    bare?: boolean;
    onClick: () => void;
    scale?: string;
}
declare const Button: StyledComponentClass<React.HTMLProps<HTMLDivElement> & IButton, any, React.HTMLProps<HTMLDivElement> & IButton>;
export default Button;
