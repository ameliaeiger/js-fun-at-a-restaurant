function nameMenuItem(food) {
let menuItemName = "Delicious " + food
return menuItemName
}



function createMenuItem(menuItemName, menuItemPrice, menuItemType){
    let menuItem = {
    name: menuItemName,
    price: menuItemPrice,
    type: menuItemType,
  }
return menuItem
}

let ingredients = [];

function addIngredients(ingredient, ingredients) {
  let includesIngredient = ingredients.includes(ingredient);
  if (includesIngredient == true) {
    console.log("ingredient already included")
  } else {
  ingredients.push(ingredient);
}
}

function formatPrice(itemPrice) {
  let formattedPrice = "$" + itemPrice
return formattedPrice;
}

function decreasePrice(price) {
  newPrice = price * .9
  return newPrice;
}


function createRecipe(title, ingredients, menuItemType) {
let recipeObject = {
  title: title,
  ingredients: ingredients,
  type: menuItemType,
}
return recipeObject;
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}

//addedIngredients = ingredients.push(ingredient);
//return addedIngredients;
