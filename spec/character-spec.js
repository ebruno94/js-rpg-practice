import {Character} from './../src/js/Character.js';
import {Mage, Warrior} from './../src/js/Characters.js';
import {Item} from './../src/js/Item.js';

describe('Mage', function(){
  let newMage;
  it('should return correct type of class and correct name', function(){
    newMage = new Mage("Alexander");
    expect(newMage.class).toEqual("Mage");
    expect(newMage.name).toEqual("Alexander");
    expect(newMage.intelligence).toEqual(10);
    expect(newMage.strength).toEqual(3);
  });
});

describe('Warrior', function(){
  let newWarrior;
  it('should return correct type of class, name, and stats', function(){
    newWarrior = new Warrior("Justin");
    expect(newWarrior.class).toEqual("Warrior");
    expect(newWarrior.name).toEqual("Justin");
    expect(newWarrior.intelligence).toEqual(3);
    expect(newWarrior.strength).toEqual(10);
  });
});

describe('Item', function(){
  let newWarrior;
  let newItem;
  it('should add health to warrior', function(){
    newWarrior = new Warrior('Ernest');
    newItem = new Item('small health potion', 'health', 10);
    expect(newWarrior.useItem(newItem)).toEqual('We just changed your health by 10!');
    expect(newWarrior.health).toEqual(85);
  });

  it('should add max health to warrior', function(){
    newWarrior = new Warrior('Justin');
    newItem = new Item('Potion of Iron', 'maxHealth', 50);
    console.log(newWarrior.getStats());
    newWarrior.useItem(newItem);
    console.log(newWarrior.getStats());
    expect(newWarrior.maxHealth).toEqual(125);
  });

  it('should add strength to warrior', function(){
    newWarrior = new Warrior('Justin');
    console.log(`My name is ${newWarrior['name']}`);
    newItem = new Item('Potion of the Bull', 'strength', 10);
    console.log(newWarrior.getStats());
    newWarrior.useItem(newItem);
    console.log(newWarrior.getStats());
    expect(newWarrior.strength).toEqual(20);
  });
});
