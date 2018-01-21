import { SYSTEM_ROOT_TYPE } from "../constants"
import TreeNode from "./tree-node";

export interface IRawAnnotation {
	annotations: Partial<IRawAnnotation>[]
	attributes: { [key: string]: string }
	body: { [key: string]: string }
	end: number
	id: string
	keywords: IKeyword[]
	source: 'xml' | 'user'
	start: number
	target: string
	type: string
}

export interface IKeyword {
	terms: string[]
	weight: number
}

class Annotation {
	public annotations: Annotation[] = []
	public attributes: Map<string, string> = new Map()
	public end: number
	public id: string
	public keywords: IKeyword[]
	public metadata: Map<string, string> = new Map()
	public source: 'xml' | 'user'
	public start: number = 0
	public target: string
	public text: string
	public type: string = SYSTEM_ROOT_TYPE

	constructor(raw?: Partial<IRawAnnotation>) {
		if (raw == null) return

		Object.keys(raw).forEach(k => {
			if (k === 'annotations') this[k] = raw[k].map(a => new Annotation(a))
			else if (k === 'attributes' && !(raw[k] instanceof Map)) {
				const attrs = raw[k]
				Object.keys(attrs).forEach(attrKey => this.attributes.set(attrKey, attrs[attrKey]))
			}
			else if (k === 'body') {
				const body = raw[k]
				Object.keys(body).forEach(bodyKey => {
					if (bodyKey === 'body') this.text = body.body
					else this.metadata.set(bodyKey, body[bodyKey])
				})
			}
			else if (k === 'text') {}
			else this[k] = raw[k]
		})

		if (this.end == null && this.text != null) this.end = this.text.length
	}

	private toRawAnnotation(): IRawAnnotation {
		const body: {[key: string]: string} =  [...this.metadata]
			.reduce((prev, [k,v]) => {
				prev[k] = v
				return prev
			}, {})

		if (this.text != null) body.body = this.text

		return {
			annotations: this.annotations.map(a => a.toRawAnnotation()),
			attributes:  [...this.attributes]
				.reduce((prev, [k,v]) => {
					prev[k] = v
					return prev
				}, {}),
			body,
			end: this.end,
			id: this.id,
			keywords: this.keywords,
			source: this.source,
			start: this.start,
			target: this.target,
			type: this.type,
		}
	}

	public clone() {
		return new Annotation(this.toRawAnnotation())
	}

	public toNode(): TreeNode {
		return new TreeNode({
			annotationId: this.id,
			attributes: this.attributes,
			end: this.end,
			start: this.start,
			type: this.type,
		})
	}
}

export default Annotation