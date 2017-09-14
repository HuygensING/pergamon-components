export interface IComponentsByTags {
    [name: string]: {
        component: any;
        display: 'inline' | 'block';
    };
}
declare const componentsByTags: IComponentsByTags;
export default componentsByTags;
