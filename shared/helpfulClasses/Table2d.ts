export class Table2d<T> {
    private readonly elements: T[]

    public constructor(public readonly width: number,
                       public readonly height: number) {
        this.elements = Array(width * height)
    }

    public set(x: number, y: number, value: T) {
        this.requireIndex(x, y)
        this.elements[x + this.width * y] = value
    }

    public get(x: number, y: number): T {
        this.requireIndex(x, y)
        return this.elements[x + this.width * y]
    }

    public getOrNull(x: number, y: number): T {
        try {
            return this.get(x, y)
        } catch (e) {
            return null
        }
    }

    public swap(x1: number, y1: number, x2: number, y2: number) {
        this.requireIndex(x1, y1)
        this.requireIndex(x2, y2)

        const index1 = x1 + this.width * y1
        const index2 = x2 + this.width * y2
        const tmp = this.elements[index1]
        this.elements[index1] = this.elements[index2]
        this.elements[index2] = tmp
    }

    public fill(creator: (x: number, y: number) => T) {
        let k = 0
        for (let i = 0; i < this.width; ++i)
            for (let j = 0; j < this.height; ++j)
                this.elements[k++] = creator(j, i)
    }

    public forEach(func: (it: T) => void) {
        this.elements.forEach(func)
    }

    public isIndexValid(x: number, y: number) {
        return !(x < 0 || x >= this.width || y < 0 || y >= this.height)
    }

    private requireIndex(x: number, y: number) {
        if (!this.isIndexValid(x, y))
            throw new RangeError(`Requested invalid ${x}:${y} index`)
    }
}