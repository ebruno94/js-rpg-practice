import {Monster} from './Monster.js';

export class Zombie extends Monster{
  constructor(){
    super(50, 50, 10);
    this.monsterType = "Zombie";
  }
}


export class Creeper extends Monster{
  constructor(){
    super(25, 25, 5);
    this.monsterType = "Creeper";
  }
}

export class Vampire extends Monster{
  constructor(){
    super(100, 100, 25);
    this.monsterType = "Vampire";
  }

}
