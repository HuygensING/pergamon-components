/// <reference types="react" />
import * as React from 'react';
export interface IKeywords {
    keywords: {
        weight: number;
        terms: string[];
    }[];
}
declare const Keywords: React.SFC<IKeywords>;
export default Keywords;
