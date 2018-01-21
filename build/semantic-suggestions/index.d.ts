/// <reference types="react" />
import * as React from 'react';
import { ISuggestion } from './suggestion';
export interface ISemanticSuggestions {
    onClickSuggestion: (q: string) => void;
    requesting: boolean;
    semanticSuggestions: ISuggestion[];
}
declare const SemanticSuggestions: React.SFC<ISemanticSuggestions>;
export default SemanticSuggestions;
