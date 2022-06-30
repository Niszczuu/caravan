import {wood} from "./tradeGoods";

export class Equipment {
    name: string;
    description: string;
    defaultValue: number;
    size: number;

    constructor(nameIn: string, val: number, s: number = 0) {
        this.name = nameIn;
        this.defaultValue = val;
        this.description = "";
        this.size = s;
    }

    setDescription(desc: string) {
        this.description = desc;
    }

}

// KLASA WOZU
const defaultWagonCost: number = 600;
const defaultWagonWidth: number = 2;
const defaultWagonHeight: number = 3;
const defaultWagonCapacity: number=100;
const wagonCapacityUpgradeAmount: number = 50;
const wagonHorsesNeeded: number = 2;

export class Wagon extends Equipment {
    front: number;
    back: number;
    left: number;
    right: number;
    capacity: number;
    height: number;
    width: number;
    upgraded: boolean;
    horsesNeeded: number;

    constructor(frontlvl: number = 1, backlvl: number = 1, leftlvl: number = 1, rightlvl: number = 1) {
        super("wagon", defaultWagonCost);
        this.front = frontlvl;
        this.back = backlvl;
        this.left = leftlvl;
        this.right = rightlvl;
        this.height = defaultWagonHeight;
        this.width = defaultWagonWidth;
        this.capacity=defaultWagonCapacity;
        this.upgraded = false;
        this.horsesNeeded = wagonHorsesNeeded;
        this.upgraded=false;
    }

    upgradeCapacity() {
        this.capacity += defaultWagonCapacity;
        this.width += 1;
        this.width += 1;
        this.upgraded = true;
        this.horsesNeeded += 1;
    }

    upgradeLeft() {
        this.left += 1;
    }

    upgradeRight() {
        this.right += 1;
    }

    upgradeFront() {
        this.front += 1;
    }

    upgradeBack() {
        this.back += 1;
    }

    upgradeAllSides() {
        this.upgradeLeft();
        this.upgradeRight();
        this.upgradeFront();
        this.upgradeBack();
    }

}


// KLASA KONIA
const defaultHorseValue = 200;

export class Horse extends Equipment {
    horsePower: number = 1;
    armorLevel: number = 0;

    constructor(armorlvl: number = 0) {
        super("horse", defaultHorseValue);
        this.horsePower = 1;
        this.armorLevel = armorlvl;
    }

    upgradeArmor() {
        this.armorLevel += 1;
    }
}


// KLASA DREWNIANEJ BARYKADY
const woodenBarrierHealth = 250;
const woodenBarrierSize = 2;

export class WoodenBarrier extends Equipment {
    health: number = woodenBarrierHealth;
    level: number = 1;

    constructor() {
        super("woodenBarrier", wood.getDefaultValue(), woodenBarrierSize);
        this.health = woodenBarrierHealth;
        this.level = 1;
    }

}

export const equipmentsList: Equipment[] = [];

const exampleWagon: Wagon = new Wagon();
equipmentsList.push(exampleWagon);
const exampleHorse: Horse = new Horse();
equipmentsList.push(exampleHorse);
const exampleWoodenBarrier: WoodenBarrier = new WoodenBarrier();
equipmentsList.push(exampleWoodenBarrier);

