// import * as React from "react";
// import Button from "./button";
// import {IAnnotation, IDocument} from "../interfaces";

// const TopRightButton = (props) =>
// 	<Button
// 		{...props}
// 		style={{
// 			color: '#BBB',
// 			position: 'absolute',
// 			right: 0,
// 			top: 0,
// 		}}
// 	>
// 		{props.children}
// 	</Button>

// export interface IProps {
// 	activateAnnotationDocument: (IAnnotation, string) => void;
// 	activeAnnotation: IAnnotation;
// 	activeAnnotationDocument: IDocument;
// 	bare?: boolean;
// 	topRight?: boolean;
// }

// const EditAnnotationDocumentButton: React.SFC<IProps> = (props) => {
// 	const Comp = props.topRight ? TopRightButton : Button;

// 	return props.activeAnnotation.hasOwnProperty('body') &&
// 	<Comp
// 		bare={props.bare}
// 		onClick={() =>
// 			props.activateAnnotationDocument(
// 				props.activeAnnotation,
// 				props.activeAnnotationDocument.id
// 			)
// 		}
// 	>
// 		✎
// 	</Comp>;
// };

// export default EditAnnotationDocumentButton;
