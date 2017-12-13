import { SYSTEM_ROOT_TYPE } from "../../src/constants"

class Annotation {
	public annotations: Annotation[] = []
	public attributes: Map<string, string> = new Map()
	public end: number
	public id: string
	public keywords: Set<string>
	public metadata: Map<string, string> = new Map()
	public source: 'xml' | 'user'
	public start: number = 0
	public target: string
	public text: string
	public type: string = SYSTEM_ROOT_TYPE

	constructor(raw?: Partial<Annotation>) {
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

		if (this.end == null && this.text != null && this.metadata.has('body')) this.end = this.metadata.get('body').length
	}
}

export default Annotation