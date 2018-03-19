export class Character{
  constructor(name, health = 50, maxHealth = 50, strength = 0, intelligence = 0){
    this.name = name;
    this.health = health;
    this.maxHealth = maxHealth;
    this.strength = strength;
    this.intelligence = intelligence;
  };

  getStats() {
    return `name: ${this.name}, health: ${this.health}, maxHealth: ${this.maxHealth}, strength: ${this.strength}, intelligence: ${this.intelligence}`;
  };

  useItem(item) {
    let useItemOnSelf = item.use;
    return useItemOnSelf(this);
  };
}
