/// <reference types="react" />
import * as React from 'react';
import { IKeyword } from '../models/annotation';
export interface IKeywords {
    keywords: IKeyword[];
    onClickKeyword: (keyword: string) => void;
}
declare const Keywords: React.SFC<IKeywords>;
export default Keywords;
