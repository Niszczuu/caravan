export class TileType {
    pos: number;
    name: string;

    constructor(name: string, pos: number) {
        this.pos = pos;
        this.name = name;
    }
}

export const grass1: TileType = new TileType("grass1", 0);
export const grass2: TileType = new TileType("grass2", 0);
export const grass3: TileType = new TileType("grass3", 0);