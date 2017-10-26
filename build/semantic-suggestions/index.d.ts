/// <reference types="react" />
import * as React from 'react';
import { ISuggestion } from './suggestion';
export interface ISemanticSuggestions {
    fullTextSearch: (q: string) => void;
    semanticSuggestions: ISuggestion[];
}
declare const SemanticSuggestions: React.SFC<ISemanticSuggestions>;
export default SemanticSuggestions;
