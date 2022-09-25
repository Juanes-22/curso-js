class ShoppingCart {
    constructor() {
      this.total = 0;
      this.items = {};
    }
    addItem(itemName, quantity, price){
      this.total = this.total + price;
      this.items[itemName] = quantity;
      //console.log(this.items);
    }
    removeItem(itemName, quantity, price){
      delete this.items['Mango'];
      // this.total = this.total - price;
      if (quantity > Object.keys(this.items).length){
        this.items = {};
      }
      //console.log(price);
      //console.log(this.total);
    }
    checkout(cashPaid){
      if (cashPaid >= this.total){
        return cashPaid - this.total;
      }
      return 'Cash paid not enough';
    }
  }
  
  class Shop extends ShoppingCart {
    constructor(quantity){
      super(quantity);
      this.quantity = 100;
    }
    removeItem(){
      this.quantity--;
    }
  }
  
  console.log(new Shop().removeItem)