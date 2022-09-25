class Item{
    constructor(name,price,quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  }
  
  class Basket {
    constructor() {
      this.items = []
    }
    
    addItem(item){
      this.items.push(item)
    }
  }
  
  let items = [
    new Item("apples",40,20),
    new Item("lemons",32,38),
    new Item("mangos",44,67),
    new Item("pineapples",32,88)
  ]
  
  let basket = new Basket()
  
  let market = document.getElementById("market")
  let s = items.map((item,id)=>"<button onClick=addItem("+id+")>Add "+item.name+"</button>").join("")
  market.innerHTML = s
  
  function addItem(id) {
    basket.addItem(items[id])
    showBasket()
  }
  
  function showBasket() {
    let cart = document.getElementById("items")
    let s = basket.items.map((item,id)=>"<span style='margin: 5px'>"+item.name+"</span>").join("")
    cart.innerHTML = s
  }