import * as uuidv4 from 'uuid/v4'
import { SYSTEM_TEXT_TYPE } from '../constants';

class TreeNode {
	public segment: 'first' | 'middle' | 'last' | 'none' = 'none'
    public annotationId: string
    public row: number
	public children: TreeNode[]
	public attributes: Map<string, string>
    public end: number
    public start: number = 0
    public type: string

	constructor(raw: Partial<TreeNode>) {
		Object.keys(raw).forEach(k => {
			const value = raw[k]
			if (value != null) this[k] = raw[k]
		})
	}

	public id(): string {
		const suffix = (this.segment !== 'none') ? `_${this.segment}` : ''
		return `${SYSTEM_TEXT_TYPE}_${uuidv4()}${suffix}`
	}

	public clone() {
		return new TreeNode(this)
	}

}

export default TreeNode