/// <reference types="react" />
import * as React from 'react';
export interface IKeyword {
    terms: string[];
    weight: number;
}
export interface IKeywords {
    keywords: Set<IKeyword>;
}
declare const Keywords: React.SFC<IKeywords>;
export default Keywords;
