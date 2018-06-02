var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var item = cartItem(item) // 'item' is now an object
 cart.push(item) // finally adding the item into the array
 return `${item.itemName} has been added to your cart.`// .itemName is needed to call the key, because 'item' is now an object
}

function cartItem(itemName) { // this function is simply to help turn the item into an object, it doesn't add item to the array
   var price = Math.floor(Math.random() * 100 + 1)
   return { itemName: itemName, itemPrice: price }
}

function viewCart() {
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      var statement = "In your cart, you have:"
      var item = cartItem(item)
      var everyItem = `${item.itemName} at ${price}.`
      return statement + everyItem.join(", ")
    }
  } else {
    return "Your shopping cart is empty." 
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
