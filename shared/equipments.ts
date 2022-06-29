export class TradeGood {
    name: string;
    defaultValue: number;

    constructor(nameIn: string, valIn: number) {
        this.name=nameIn;
        this.defaultValue=valIn;
    }

    getName(){
        return this.name;
    }

    getDefaultValue(){
        return this.defaultValue;
    }
}

export class LuxuryGood extends TradeGood{
    rarity: number;

    constructor(name:string,value:number,rarityIn:number) {
        super(name,value);
        this.rarity=rarityIn;
    }

    getRarity(){
        return this.rarity;
    }

}

//LIST OF TRADE GOODS USED EVERYWHERE ELSE (simplyfing editing)
export let tradeGoods: TradeGood[]=[];


//DEFAULT TRADE GOODS
let wood = new TradeGood("wood",10);
tradeGoods.push(wood);
let stone = new TradeGood("stone",25);
tradeGoods.push(stone);
let coal = new TradeGood("coal",35);
tradeGoods.push(coal);
let iron = new TradeGood("iron",80);
tradeGoods.push(iron);
let gold = new TradeGood("gold",120);
tradeGoods.push(gold);
let wheat = new TradeGood("wheat",1);
tradeGoods.push(wheat);
let bread = new TradeGood("bread",5);
tradeGoods.push(bread);
let fish = new TradeGood("fish",4);
tradeGoods.push(fish);
let wool = new TradeGood("wool",15);
tradeGoods.push(wool);

//LUXURY TRADE GOODS
let diamond = new LuxuryGood("wood",200,50);
tradeGoods.push(diamond);

//TRADE GOODS WITH SPECIAL FUNCTIONALITY ??? (ex. fireworks)
