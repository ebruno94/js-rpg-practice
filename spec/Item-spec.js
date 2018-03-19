import { Item } from './../src/js/Item.js';

describe('Item', function() {
  it ('should create a new item with a dynamic function', function() {
    let newItem = new Item("small health potion", "health", 10);
    expect(newItem.name).toEqual("small health potion");
  })
  
})
