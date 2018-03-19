import {Monster} from './../src/js/Monster.js';
import {Zombie, Creeper, Vampire} from './../src/js/Monsters.js';
import {Warrior, Mage} from './../src/js/Characters.js';

describe('Zombie', function(){
  let newZombie = new Zombie();
  let newWarrior = new Warrior('Justin');
  it('should return correct type, and health', function(){
    expect(newZombie.monsterType).toEqual('Zombie');
    expect(newZombie.health).toEqual(50);
    expect(newZombie.maxHealth).toEqual(50);
  });
  it('should damage Warrior when attacked by zombie', function(){
    console.log(newWarrior.health);
    console.log(newZombie.attack(newWarrior));
    console.log(newWarrior.health);
    expect(newWarrior.health).toEqual(65);
  });
});

describe('Creeper', function(){
  let newCreeper;
  let newMage;
  it('should return correct type, and health', function(){
    newCreeper = new Creeper();
    newMage = new Mage('Zander');
    expect(newCreeper.monsterType).toEqual('Creeper');
    expect(newCreeper.health).toEqual(25);
    expect(newCreeper.maxHealth).toEqual(25);
  });
  it('should damage Mage when attacked by Creeper', function(){
    console.log(newMage.health);
    console.log(newCreeper.attack(newMage));
    console.log(newMage.health);
    expect(newMage.health).toEqual(45);
  })
});

describe('Vampire', function(){
  let newVampire;
  it('should return correct type, and health', function(){
    newVampire = new Vampire();
    expect(newVampire.monsterType).toEqual('Vampire');
    expect(newVampire.health).toEqual(100);
    expect(newVampire.maxHealth).toEqual(100);
  });
});
