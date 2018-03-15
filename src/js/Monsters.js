import {Monster} from './Monster.js';

export class Zombie extends Monster{
  constructor(){
    super(50, 50);
    this.monsterType = "Zombie";
  }

  attack(){
    return "BRAAAAAAAAINS~!";
  }
}


export class Creeper extends Monster{
  constructor(){
    super(25, 25);
    this.monsterType = "Creeper";
  }

  attack(){
    console.log("*Insert blowup noise*");
  }
}

export class Vampire extends Monster{
  constructor(){
    super(100, 100);
    this.monsterType = "Vampire";
  }

  attack(){
    console.log("~Slurp~");
  }
}
