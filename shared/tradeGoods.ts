export class TradeGood {
    name: string;
    defaultValue: number;

    constructor(nameIn: string, valIn: number) {
        this.name = nameIn;
        this.defaultValue = valIn;
    }

    getName() {
        return this.name;
    }

    getDefaultValue() {
        return this.defaultValue;
    }
}

export class LuxuryGood extends TradeGood {
    rarity: number;

    constructor(name: string, value: number, rarityIn: number) {
        super(name, value);
        this.rarity = rarityIn;
    }

    getRarity() {
        return this.rarity;
    }

}

//LIST OF TRADE GOODS USED EVERYWHERE ELSE (simplyfing editing)
export const tradeGoods: TradeGood[] = [];


//DEFAULT TRADE GOODS
export const wood = new TradeGood("wood", 10);
tradeGoods.push(wood);
export const stone = new TradeGood("stone", 25);
tradeGoods.push(stone);
export const coal = new TradeGood("coal", 35);
tradeGoods.push(coal);
export const iron = new TradeGood("iron", 80);
tradeGoods.push(iron);
export const gold = new TradeGood("gold", 120);
tradeGoods.push(gold);
export const wheat = new TradeGood("wheat", 1);
tradeGoods.push(wheat);
export const bread = new TradeGood("bread", 5);
tradeGoods.push(bread);
export const fish = new TradeGood("fish", 4);
tradeGoods.push(fish);
export const wool = new TradeGood("wool", 15);
tradeGoods.push(wool);

//LUXURY TRADE GOODS
export const diamond = new LuxuryGood("wood", 200, 50);
tradeGoods.push(diamond);

//TRADE GOODS WITH SPECIAL FUNCTIONALITY ??? (ex. fireworks)
