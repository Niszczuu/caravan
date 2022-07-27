import {gameMap, gameScreen, mainCaravan} from "../main";
import {Caravan} from "../../shared/Caravan";
import {exampleBiome} from "../../shared/biomes/biome";
import {displayMap} from "../../shared/gameMap/DisplayMap";

export function startNewGame(){
    gameMap.generateMap(exampleBiome);
    console.log(gameMap);
    displayMap();


}






