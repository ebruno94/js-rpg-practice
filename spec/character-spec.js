import {Character} from './../src/js/Character.js';
import {Mage, Warrior} from './../src/js/Characters.js';

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
