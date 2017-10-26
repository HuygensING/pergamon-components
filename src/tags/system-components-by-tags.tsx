import { Span, Div, ITag } from "./default-tags";

export enum Display { None, Inline, Block };
export interface IComponentsByTags {
	[name: string]: {
		component: React.SFC<ITag>;
		display: Display;
	}
}

const systemComponentsByTags: IComponentsByTags = {
	__text: {
		component: Span,
		display: Display.Inline,
	},
	__root: {
		component: Div,
		display: Display.Block,
	},
};

export default systemComponentsByTags;