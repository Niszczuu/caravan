import {Equipment, equipmentsList, Horse, Wagon, WoodenBarrier} from "./Equipments";
import {tradeGoods} from "./TradeGoods";
import {CharacterSheet} from "./CharacterSheet";

const defaultCampTimer = 3;
const defaultStartingEmeralds = 300;
const randomEmeralds=200;

export class Caravan {
    equipment: Equipment[] = [];
    goodsAmount: number[] = [];
    characters: CharacterSheet[] = [];

    emeralds:number;
    foodCounter: number;
    capacity: number;
    campTimer: number;
    //quests
    //gossips

    constructor() {
        for (let i = 0; i < tradeGoods.length; i++) {
            this.goodsAmount[i] = 0;
        }
        this.foodCounter = 0;
        this.capacity = 0;
        this.campTimer = defaultCampTimer;
        this.emeralds=0;
    }

    generateRandom() {
        for (let i = 0; i < tradeGoods.length; i++) {
            this.goodsAmount[i] = Math.round(Math.random() * 10);
        }
        this.generateRandomCharacters();
        this.generateRandomWagons();
        this.generateRandomwBarricades();
        this.emeralds=defaultStartingEmeralds+Math.floor(Math.random()*randomEmeralds);

    }

    generateRandomCharacters(){
        let amountOfCharacters: number = Math.round(Math.random() * 3 + 1);
        for (let i = 0; i < amountOfCharacters; i++) {
            let newCharacter: CharacterSheet = new CharacterSheet();
            newCharacter.randomize();
            this.characters.push(newCharacter);
        }
    }

    generateRandomWagons(){
        const wagonsAmount: number = 1;
        for (let i = 0; i < wagonsAmount; i++) {
            let newWagon: Wagon = new Wagon();
            this.equipment.push(newWagon);
            for (let j = 0; j < newWagon.horsesNeeded; j++) {
                let newHorse: Horse = new Horse();
            }
        }
    }

    generateRandomwBarricades(){
        const wBarricadesAmount: number = Math.round(Math.random() * 10);
        for (let i = 0; i < wBarricadesAmount; i++) {
            let newBarricade: WoodenBarrier = new WoodenBarrier();
            this.equipment.push(newBarricade);
        }
    }


}

export const exampleCaravanInventory: Caravan = new Caravan();
exampleCaravanInventory.generateRandom();