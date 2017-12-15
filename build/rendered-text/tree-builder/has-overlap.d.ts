export interface IStartEnd {
    end: number;
    start: number;
    [propName: string]: any;
}
declare const hasOverlap: (a: IStartEnd, b: IStartEnd) => boolean;
export default hasOverlap;
