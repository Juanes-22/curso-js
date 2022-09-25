class CartItem{
    constructor(title,price, quantity){
        this.title = title;
         this.price = price;
        this.quantity = quantity;
        this.updateQuantity.bind(this)
    }
    
    updateQuantity( quantity){ 
        this.quantity +=quantity
    }

}

 class Cart{
    constructor(){
        this.cartItems = [];
        this.addItem.bind(this)
        this.removeItem.bind(this)
        this.showcart.bind(this)
        this.checkIfItemExists.bind(this)
    }
    
    addItem(cartItem){
        //if item s already added to cart  increment its quantity 
        const alreadyInCart=mycart.checkIfItemExists(cartItem.title)
        if(alreadyInCart)
             return cartItem.updateQuantity(cartItem.quantity)
         //else just add the tem 
          this.cartItems.push(cartItem)
    }
    checkIfItemExists(title){
         return  this.cartItems.filter(item=> item.title == title)[0] != undefined 
    }
   removeItem (title){
        this.cartItems= [...this.cartItems].filter(item=>item.title !=title )
    }
    showcart(){
       console.log(this.cartItems)
    }
}

const item1 = new CartItem('item1',20,1)
const item2= new CartItem('item2',20,1)
const mycart = new Cart()

mycart.addItem(item1)
mycart.addItem(item1)
mycart.addItem(item2)

mycart.showcart()