import {tradeGoods} from "../shared/tradeGoods";
import {equipmentsList} from "../shared/equipments";
import {CharacterSheet, exampleCharacter} from "../shared/characterSheet";
import {Caravan, exampleCaravanInventory} from "../shared/caravan";

export const gameScreen = document.getElementById("mainScreen")

//gameScreen.setAttribute("gameStatus","0")

console.log("TradeGoods Loaded:");
console.log(tradeGoods);

console.log("EquipmentList Loaded:");
console.log(equipmentsList);

console.log("CharacterSheet Loaded:");
console.log(exampleCharacter);

console.log("EventTemplate Loaded:");


console.log("InventoryTemplate Loaded:");
console.log(exampleCaravanInventory);

console.log("Biomes Loaded:");

// --- MAIN MENU ---
console.log("Welcome to main menu")
//  --- Main Menu buttons functionality ---
let startGameButton = document.getElementById("newGame")
//startGameButton.onclick=
//startGameButton.onclick=createSelectionScreen;

//Main Caravan object of class Caravan containing all information about player needed.Such as his inventory, characters in caravan, equipment etc.
export let mainCaravan;
