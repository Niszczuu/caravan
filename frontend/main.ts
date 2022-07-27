import {tradeGoods} from "../shared/TradeGoods";
import {equipmentsList} from "../shared/Equipments";
import {CharacterSheet, exampleCharacter} from "../shared/CharacterSheet";
import {Caravan, exampleCaravanInventory} from "../shared/Caravan";
import {exampleBiome} from "../shared/biomes/biome";
import {GameMap} from "../shared/gameMap/GameMap";
import {startNewGame} from "./ts/startNewGame";
import {exampleEvent} from "../shared/events/Event";

class GameState{
    state:string="menu";
    constructor() {
        this.state="menu";
    }
    changeState(newState:string){ this.state=newState }
    getState(){return this.state }
}


export const gameScreen = document.getElementById("gameScreen")

//gameScreen.setAttribute("gameStatus","0")

console.log("TradeGoods Loaded:");
console.log(tradeGoods);

console.log("EquipmentList Loaded:");
console.log(equipmentsList);

console.log("CharacterSheet Loaded:");
console.log(exampleCharacter);

console.log("EventTemplate Loaded:");
console.log(exampleEvent);

console.log("InventoryTemplate Loaded:");
console.log(exampleCaravanInventory);

console.log("Biomes Loaded:");
console.log(exampleBiome);


// --- MAIN MENU ---
console.log("")
console.log("Welcome to main menu")
//  --- Main Menu buttons functionality ---
let startGameButton = document.getElementById("newGame")
startGameButton.addEventListener("click", startNewGame);
//startGameButton.onclick=createSelectionScreen;

//Main Caravan object of class Caravan containing all information about player needed.Such as his inventory, characters in caravan, equipment etc.
export let mainCaravan:Caravan =  new Caravan();
export let gameMap:GameMap = new GameMap();
export let gameState:GameState = new GameState();


