/// <reference types="react" />
import * as React from 'react';
import { IKeyword } from '../models/annotation';
export interface IKeywords {
    keywords: IKeyword[];
}
declare const Keywords: React.SFC<IKeywords>;
export default Keywords;
