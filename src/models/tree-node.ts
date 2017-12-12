class TreeNode {
    public first: boolean
    public annotationId: string
    public last: boolean
    public row: number
    public segment: boolean
    public id: string
	public children: TreeNode[]
	public attributes: Map<string, string>
    public end: number
    public start: number = 0
    public type: string

	constructor(raw?: Partial<TreeNode>) {
		if (raw == null) return

		Object.keys(raw).forEach(k => {
			const value = raw[k]
			if (value != null) this[k] = raw[k]
		})
	}
}

export default TreeNode