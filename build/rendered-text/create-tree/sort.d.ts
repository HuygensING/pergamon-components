import { IAnnotation } from '../../interfaces';
export declare const byStartEnd: (a: IAnnotation, b: IAnnotation) => 0 | 1 | -1;
export declare const byDisplayStartEnd: (tags: any) => (a: IAnnotation, b: IAnnotation) => 0 | 1 | -1;
export declare const byRowStartEnd: (a: any, b: any) => 0 | 1 | -1;
