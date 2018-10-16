import * as React from 'react';
export interface ISuggestion {
    text: string;
    weight: number;
}
export interface ISuggestionProps {
    onClick: (ev: any) => void;
    suggestion: ISuggestion;
}
export interface ISuggestionState {
    hover: boolean;
}
declare class Suggestion extends React.PureComponent<ISuggestionProps, ISuggestionState> {
    state: {
        hover: boolean;
    };
    render(): JSX.Element;
}
export default Suggestion;
