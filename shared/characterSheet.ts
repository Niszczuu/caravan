const defaultCharacterEnergy = 5;
const defaultCharacterArmor = 0;
const defaultCharacterSpeed = 5;

export class CharacterSheet {
    name: string;
    surname: string;
    model: number;
    experience: number;

    health: number;
    mana: number;
    energy: number;
    armor: number;
    speed: number;
    // ???

    //weapon1:
    //weapon2:
    //profession:
    //experienceBars: []

    randomize() {
        this.name = "Jakub";
        this.surname = "Wilk";
        this.model = 1;
        this.experience = 0;
        this.health = 100 + Math.round(Math.random() * 50);
        this.mana = 100 + Math.round(Math.random() * 50);
        this.energy = defaultCharacterEnergy;
        this.armor = defaultCharacterArmor + Math.round(Math.random() * 5);
        this.speed = defaultCharacterSpeed + Math.round(Math.random());

    }

}

export const exampleCharacter = new CharacterSheet();
exampleCharacter.randomize();