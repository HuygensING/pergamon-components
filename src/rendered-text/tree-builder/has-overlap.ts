export interface IStartEnd {
	end: number
	start: number
	[propName: string]: any
}

const hasOverlap = (a: IStartEnd, b: IStartEnd) =>
	!(a.end <= b.start || a.start >= b.end) ||
	(a.start === b.start && a.end > b.end) ||
	(a.start < b.start && a.end === b.end)
export default hasOverlap