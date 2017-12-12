// import { SYSTEM_ROOT_TYPE } from "../../src/constants"

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
	public type: string = '__root'

	constructor(raw?: Partial<Annotation>) {
		if (raw == null) return

		Object.keys(raw).forEach(k => {
			if (k === 'annotations') this[k] = raw[k].map(a => new Annotation(a))
			else if (k === 'attributes' && !(raw[k] instanceof Map)) {
				this[k] = new Map()
				Object.keys(raw[k]).forEach(attrKey => this[k].set(attrKey, raw[k][attrKey]))
			}
			else this[k] = raw[k]
		})

		if (this.end == null && this.text != null) this.end = this.text.length

		// TODO: let server send metadata instead of extracting it in every (root)annotation
		this.annotations
			.filter(a => a.type === 'meta')
			.forEach(a => this.metadata.set(a.attributes.get('type'), a.attributes.get('value')))
	}
}

export default Annotation