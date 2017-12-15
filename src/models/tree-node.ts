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
		const row = (this.row != null) ? `_${this.row}` : ''
		return `${this.type}_${this.start}_${this.end}${row}${suffix}`
	}

	public clone() {
		return new TreeNode(this)
	}

}

export default TreeNode