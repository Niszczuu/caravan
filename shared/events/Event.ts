import {mainCaravan} from "../../frontend/main";
import {TradeGood, tradeGoods, wood} from "../TradeGoods";
import {grass1, grass3, TileType} from "../gameMap/TileType";
import {MapTile} from "../gameMap/MapTile";

export class Event {
    eventId:number;
    eventName:string;
    description:string;
    eventImage:string;
    decisions:Decision[] = [];
    tileType:TileType;

    constructor(idIn:number,nameIn:string,descIn:string,imgName:string,tileTypeIn:TileType) {
        this.eventId=idIn;
        this.eventName=nameIn;
        this.description=descIn;
        this.eventImage=imgName;
        this.decisions=[];
        this.tileType=tileTypeIn;
    }

    addDecision(decisionIn:Decision){
        this.decisions.push(decisionIn);
    }

}

export class Decision {
    description:string;
    decisionEffects:DecisionEffect[]=[];

    constructor(descIn:string) {
        this.description=descIn;
    }

    addDecisionEffect(effIn:DecisionEffect){
        let rarity:number=effIn.chance;
        for(let i:number=0;i<rarity;i++){
            this.decisionEffects.push(effIn);
        }
    }

    useRandomEffect(){
        let randomNumber:number = Math.round(Math.random()*(this.decisionEffects.length));
        this.decisionEffects[randomNumber].useEffect();
    }


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

    useEffect(){}

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
        console.log(" emeralds amount changed: "+this.value);
    }


}


export const exampleEvent = new Event(-1,"Out of nowhere wild Lechonk appears!","As in title","placeholder.png",grass3);

const decision1effect1:DecisionEffect=new DecisionEffectEmeralds(1,"emerald?",10);
const decision1effect2:DecisionEffect=new DecisionEffectEmeralds(1,"emerald?",10);
const decision2effect1:DecisionEffect=new DecisionEffectGoods(2,"emerald?",10,wood);
const decision2effect2:DecisionEffect=new DecisionEffectGoods(1,"emerald?",10,wood);

const decision1:Decision=new Decision("Sell it");
const decision2:Decision=new Decision("Exchange it");

decision1.addDecisionEffect(decision1effect1);
decision1.addDecisionEffect(decision1effect2);
decision2.addDecisionEffect(decision2effect1);
decision2.addDecisionEffect(decision2effect2);

exampleEvent.addDecision(decision1);
exampleEvent.addDecision(decision2);


