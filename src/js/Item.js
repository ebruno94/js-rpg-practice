export function Item(name, attribute, magnitude){
  this.name = name;
  this.attribute = attribute;
  this.magnitude = magnitude;
  this.use = this.useConstructor(this.attribute, this.magnitude);
}

Item.prototype.useConstructor = function(attribute, magnitude){
  return function(character){
    character[`${attribute}`] += magnitude;
    return `We just changed your ${attribute} by ${magnitude}!`
  }
}
