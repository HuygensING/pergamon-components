/// <reference types="react" />
import { Tag, ITag } from "../interfaces";
export declare enum Display {
    None = 0,
    Inline = 1,
    Block = 2,
}
export interface IComponentsByTags {
    [name: string]: {
        component: Tag | React.ComponentClass<ITag>;
        display: Display;
    };
}
declare const systemComponentsByTags: IComponentsByTags;
export default systemComponentsByTags;
