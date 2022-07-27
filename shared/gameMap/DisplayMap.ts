import {gameMap, gameScreen, gameState, mainCaravan} from "../../frontend/main";
import {mapHeight, mapWidth, tileGroupSize} from "./GameMap";
import {MapTile} from "./MapTile";

export function displayMap(){
    gameScreen.innerHTML="";
    biomeImage.style.backgroundColor="black";
    biomeImage.style.backgroundImage="/img/map/"+gameMap.biome.name+".png";
    gameScreen.appendChild(topBar);
    gameScreen.appendChild(biomeDescription);
    gameScreen.appendChild(tileMap);
    for(let i:number=0;i<mapWidth*tileGroupSize;i++) {
        for (let j: number = 0; j < mapHeight * tileGroupSize; j++) {
            let selectedTile:MapTile=gameMap.tiles.get(i,j);
            let newTile:HTMLSpanElement= document.createElement("span");
            newTile.id=i.toString()+","+j.toString();
            newTile.style.backgroundColor="red";
            newTile.className="mapTile";
            if(selectedTile.event!=null){
                let newLocation:HTMLSpanElement= document.createElement("span");
                newLocation.className="unvisitedLocation";
                newLocation.className="l"+(i%tileGroupSize).toString()+","+(j%tileGroupSize);
                newTile.appendChild(newLocation);
            }
            newTile.style.backgroundImage="/img/map/"+selectedTile.biomeType;
            newTile.setAttribute("tileType",selectedTile.type.name);
            tileMap.appendChild(newTile);
        }
    }


    gameState.changeState("map");
}


const topBar:HTMLSpanElement = document.createElement("span");
topBar.id="topBar";

//biome image and description

const biomeImage:HTMLSpanElement= document.createElement("span");
const biomeDescription:HTMLSpanElement= document.createElement("span");
biomeImage.id="biomeImage";
biomeDescription.id="biomeDescription";

//Counters
const emeraldCounter:HTMLSpanElement= document.createElement("span");
const foodCounter:HTMLSpanElement= document.createElement("span");
const campTimer:HTMLSpanElement= document.createElement("span");
const hordeTimer:HTMLSpanElement= document.createElement("span");
emeraldCounter.id="emeraldCounter";
foodCounter.id="foodCounter";
campTimer.id="campTimer";
hordeTimer.id="hordeTimer";

topBar.appendChild(emeraldCounter);
topBar.appendChild(foodCounter);
topBar.appendChild(biomeImage);
topBar.appendChild(campTimer);
topBar.appendChild(hordeTimer);


//Tile Map
const tileMap:HTMLSpanElement= document.createElement("span");
tileMap.id="tileMap";



function refreshCounters(){
    emeraldCounter.innerText=mainCaravan.emeralds.toString();
    foodCounter.innerText=mainCaravan.foodCounter.toString();
    campTimer.innerText=mainCaravan.campTimer.toString();
    hordeTimer.innerText="0";
}

