export function Monster(health, maxHealth, attackDamage){
  this.health = health;
  this.maxHealth = maxHealth;
  this.attackDamage = attackDamage;
  this.attack = this.attackHelper(this.attackDamage);
}

Monster.prototype.attackHelper = function(attackDamage){
  return function(enemy){
    enemy['health'] -= attackDamage;
    return `${this.monsterType} attacked ${enemy.name} for ${attackDamage} damage!`;
  }
}
