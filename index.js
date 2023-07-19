//import coffee_data.js
const coffeeMenu = require("./coffee_data.js");

//Print an array of all the drinks on the menu.
const print_drink = (item) => {
  return item.name;
};
console.log(coffeeMenu.map(print_drink));

// Print an array of drinks that cost 5 and under.
const cheap_drinks = coffeeMenu.filter((item) => item.price <= 5);

console.log(cheap_drinks.map(print_drink));

// Print an array of drinks that are priced at an even number.
const even_price = coffeeMenu.filter((item) => item.price % 2 === 0);

console.log(even_price.map(print_drink));

// Print the total if you were to order one of every drink.
const total = coffeeMenu.reduce((acc, item) => acc + item.price, 0);

console.log(total);

// Print an array with all the drinks that are seasonal.
const seasonal_drink = coffeeMenu.filter((item) => item.seasonal === true);

console.log(seasonal_drink.map(print_drink));

// Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
const seasonal_description = coffeeMenu
  .filter((item) => item.seasonal === true)
  .map((item) => `${item.name} with imported beans`);

console.log(seasonal_description);
