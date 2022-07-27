import {Table2d} from "../helpfulClasses/Table2d";
import {Biome} from "../biomes/biome";
import {MapTile} from "./MapTile";

export const mapWidth:number=12;
export  const mapHeight:number=5;

export const tileGroupSize:number=2;
const locationsAmount=60;

const conflagrationRealeaseTimer=3;
export const conflagrationCounter=3;

export class GameMap {
    tiles:Table2d<MapTile>=new Table2d(mapWidth*tileGroupSize,mapHeight*tileGroupSize);
    hordePosition:number=0;
    hordeCounter:number=conflagrationCounter;
    hordeRealeaseTimer:number=conflagrationRealeaseTimer;
    biome:Biome;
    //start:{x:number,y:number};

    generateMap(biome:Biome){
        this.biome=biome;
        for(let i:number=0;i<mapWidth*tileGroupSize;i++){
            for(let j:number=0;j<mapHeight*tileGroupSize;j++){
                this.tiles.set(i,j,this.biome.getRandomTile());
            }
        }
        for(let i:number=0;i<mapWidth;i++){
            for(let j:number=0;j<mapHeight;j++){
                let x:number=Math.floor(Math.random()*tileGroupSize);
                let y:number=Math.floor(Math.random()*tileGroupSize);
                let selectedTile:MapTile=this.tiles.get(i*tileGroupSize+x,j*tileGroupSize+y);
                selectedTile.event=this.biome.getRandomEvent();
                this.changeTilesAroundLocation(i*tileGroupSize+x,j*tileGroupSize+y);
            }
        }

    }

    changeTilesAroundLocation(x:number,y:number){
        let selectedTile:MapTile=this.tiles.get(x,y);
        selectedTile.type=selectedTile.event.tileType;
    }

}


