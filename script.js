//object class for the products to store them
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    // Initializes the properties id, name, and price of the Product object with the corresponding values passed to the constructor.
  }
}
//used  constructor method to initialize object properties
class ShoppingCartItem {
  // Defines a class named ShoppingCartItem to represent an item in a shopping cart.
  constructor(product, quantity) {
    //Defines the constructor function for the ShoppingCartItem class, which takes two parameters: product and quantity.
    this.product = product;
    this.quantity = quantity;
    //
  }

  getTotalPrice() {
    //which calculates the total price of the item by multiplying the product's price by the quantity.
    return this.product.price * this.quantity;
  }
}
class ShoppingCart {
  constructor() {
    this.items = [];
  }
  //Defines the constructor function for the ShoppingCart class, which initializes an empty array items to store the cart items.
  getTotal() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    // Defines a method named getTotal within the ShoppingCart class, which calculates the total price of all items in the cart using the reduce method.
  }

  addItem(product, quantity) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
    // The addItem method finds an existing item in the cart based on its product .
    //If found, it increases the quantity of the existing item. Otherwise, it creates a new ShoppingCartItem object and adds it to the cart.
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }
  //Defines a method named removeItem within the ShoppingCart class, which removes an item from the cart based on its product

  displayCartItems() {
    //Defines a method named displayCartItems within the ShoppingCart class,
    // which displays the contents of the cart, including item names, quantities, total prices, and the overall cart total.
    console.log("Your Shopping Cart:");
    this.items.forEach((item) => {
      console.log(
        `${item.product.name} (Quantity: ${item.quantity}, Total: ${item
          .getTotalPrice()
          .toFixed(2)})`
        //item.product.name: Accesses the product name property within the current item (item) and its product object.
        //(Quantity: ${item.quantity}): Shows the quantity of the product, using string interpolation to include the actual quantity value.
        //(Total: ${item.getTotalPrice().toFixed(2)}): Displays the total price of the item by calling the getTotalPrice method on the current item (item) and formatting the result using toFixed(2) to show two decimal places.
      );
    });
    console.log("Total: $" + this.getTotal().toFixed(2));
  }
}
//The displayCartItems method iterates over the cart items and logs each item's details to the console.
//It also logs the total price of all items in the cart.

//example
const product1 = new Product(1, "Apple", 1.23);
const product2 = new Product(2, "Orange", 1.33);
const cart = new ShoppingCart();
//This creates a new shopping cart object, likely initializing an empty cart with no items initially.
cart.addItem(product1, 3);
//This line calls the addItem method on the cart object.
//It passes two arguments:
//product1: The Product object created earlier, representing the apple. 3:
//The quantity of apples to add to the cart.
//The addItem method adds the product with the specified quantity to the internal list of items in the shopping cart.
cart.addItem(product2, 2);
//it calls the addItem method on the cart object again.
//This time, it adds product2 (the orange) with a quantity of 2 to the shopping cart.
cart.displayCartItems();
//it displays the information of the items such as name, quantity, and total price, to the console
cart.removeItem(product1.id);
//t passes product1.id (which is 1 in this case) as an argument.
//The removeItem  in the cart that have a matching product ID and removes those items from the cart.
cart.displayCartItems();
//this gives the final updated result after the removal
