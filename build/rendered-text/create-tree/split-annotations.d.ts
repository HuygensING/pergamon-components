import { IAnnotation } from "../../interfaces";
export declare const toSplitPoints: (splitPoints: any, curr: any, index: any, arr: any) => any;
export declare const splitAnnotation: (annotation: IAnnotation, splitPoints: number[]) => IAnnotation[];
export declare const splitAnnotations: () => (agg: any, curr: any, index: any, arr: any) => any;
