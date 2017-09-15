import { IAnnotation } from "../../interfaces";
import { IComponentsByTags } from "../../tags/system-components-by-tags";
export declare const hasOverlap: (a: any, b: any) => boolean;
export declare const generateTagId: (a: IAnnotation) => string;
declare const createTree: (annotation: IAnnotation, tags: IComponentsByTags) => IAnnotation;
export default createTree;
