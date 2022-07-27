import {TileType} from "./TileType";
import {Event} from "../events/Event";

export class MapTile {
    type: TileType;
    biomeType: string;
    event: Event;

    constructor(typeIn: TileType, biomeIn: string = "plains", eventIn: Event = null) {
        this.type = typeIn;
        this.biomeType = biomeIn;
        this.event = eventIn;
    }

    changeType(typeIn: TileType) {
        this.type = typeIn;
    }

    changeBiomeType(typeIn: string) {
        this.biomeType = typeIn;
    }

}