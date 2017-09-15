export declare enum Display {
    None = 0,
    Inline = 1,
    Block = 2,
}
export interface IComponentsByTags {
    [name: string]: {
        component: any;
        display: Display;
    };
}
declare const componentsByTags: IComponentsByTags;
export default componentsByTags;
