import {Event, exampleEvent} from "../events/Event";
import {TradeGood, tradeGoods} from "../TradeGoods";
import {grass1, grass2, TileType} from "../gameMap/TileType";
import {MapTile} from "../gameMap/MapTile";

export class Biome {
    name: string;
    goodsValueModifiers: number[] = [];
    eventList: { event: Event, rarity: number }[]=[];
    biomeType: string;
    tilesComposition: MapTile[]=[];

    constructor(nameIn:string="tmp", biomeTypeIn:string="plains") {
        this.name=nameIn;
        this.biomeType=biomeTypeIn;
        this.eventList.length=0;
        this.goodsValueModifiers=[tradeGoods.length];
        for(let i:number=0;i<tradeGoods.length;i++){
            this.goodsValueModifiers[i]=1;
        }
        this.tilesComposition.length=0;
    }

    insertEvent(event:Event,rarity:number){
        if(this.eventList.length==0)this.eventList.push({event,rarity});
        else {
            rarity=rarity+this.eventList[this.eventList.length-1].rarity;
            this.eventList.push({event,rarity});
        }
    }

    editValueModifier(good:TradeGood,newModifier:number){
        this.goodsValueModifiers[tradeGoods.indexOf(good)]=newModifier;
    }

    insertTile(mapTile:MapTile,rarity:number){
        for(let i:number=0;i<rarity;i++){
            this.tilesComposition.push(mapTile);
        }
    }

    getRandomTile(){
        let tmp:number = (Math.floor(Math.random()*(this.tilesComposition.length)));
        let selectedTile:MapTile=this.tilesComposition[tmp];
        let tmpTile:MapTile=new MapTile(selectedTile.type,this.biomeType);
        return tmpTile;
    }

    getRandomEvent(){
        return (this.eventList[Math.floor(Math.random()*this.eventList.length)].event);
    }

}


export const exampleBiome:Biome = new Biome("exampleBiome","plains");
let plainsGrass1:MapTile=new MapTile(grass1,"plains");
let plainsGrass2:MapTile=new MapTile(grass2,"plains");
exampleBiome.insertTile(plainsGrass1,3);
exampleBiome.insertTile(plainsGrass2,1);

exampleBiome.insertEvent(exampleEvent,1);
//exampleBiome.insertEvent();