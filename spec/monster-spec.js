import {Monster} from './../src/js/Monster.js';
import {Zombie, Creeper, Vampire} from './../src/js/Monsters.js';

describe('Zombie', function(){
  let newZombie = new Zombie();
  it('should return correct type, and health', function(){
    expect(newZombie.monsterType).toEqual('Zombie');
    expect(newZombie.health).toEqual(50);
    expect(newZombie.maxHealth).toEqual(50);
  });
  it('should return string', function(){
    expect(newZombie.attack()).toEqual("BRAAAAAAAAINS~!");
  });
});

describe('Creeper', function(){
  let newCreeper;
  it('should return correct type, and health', function(){
    newCreeper = new Creeper();
    expect(newCreeper.monsterType).toEqual('Creeper');
    expect(newCreeper.health).toEqual(25);
    expect(newCreeper.maxHealth).toEqual(25);
  });
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
