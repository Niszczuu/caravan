import {mainCaravan} from "../frontend/main";
import {TradeGood, tradeGoods} from "./tradeGoods";

export class Event {
    eventId:number;
    eventName:string;
    description:string;
    eventImage:string;
    decisions:Decision[] = [];
}

export class Decision {
    description:string;

}


export class DecisionEffect{
    chance:number;
    type:string;
    value:number;

    constructor(chanceIn:number,typeIn:string,valueIn:number) {
        this.chance=chanceIn;
        this.type=typeIn;
        this.value=valueIn;
    }

}

export class DecisionEffectGoods extends DecisionEffect{
    good:TradeGood;

    constructor(chanceIn:number,typeIn:string,valueIn:number,goodIn:TradeGood) {
        super(chanceIn,typeIn,valueIn);
        this.good=goodIn;
    }

    useEffect(){
        mainCaravan.goodsAmount[tradeGoods.indexOf(this.good)]+=this.value;
    }

}

export class DecisionEffectEmeralds extends DecisionEffect{
    constructor(chanceIn:number,typeIn:string,valueIn:number) {
        super(chanceIn,typeIn,valueIn);
    }

    useEffect(){
        mainCaravan.emeralds+=this.value;
    }


}