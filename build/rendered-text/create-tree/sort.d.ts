import { IAnnotation } from '../../interfaces';
import { IComponentsByTags } from '../../tags/system-components-by-tags';
export declare const byStartEnd: (a: IAnnotation, b: IAnnotation) => 1 | -1 | 0;
export declare const byDisplayStartEnd: (tags: IComponentsByTags) => (a: IAnnotation, b: IAnnotation) => 1 | -1 | 0;
export declare const byRowStartEnd: (a: any, b: any) => 1 | -1 | 0;
