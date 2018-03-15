import { Character } from './Character.js';

export class Mage extends Character {
  constructor(name){
    super(name, 50, 50, 3, 10);
    this.class = "Mage";
  }

  attack(){
    console.log("soul strike!!");
  }
}

export class Warrior extends Character {
  constructor(name){
    super(name, 75, 75, 10, 3);
    this.class = "Warrior";
  }

  attack(){
    console.log("*swoosh* *swoosh*")
  }
}
