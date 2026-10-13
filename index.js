//practice github project Random Recipe Generator
const products = ["beef", "pork", "lamb", "chicken", "ground meat", "fish", "shrimp", "cheese", "cottage cheese", "sour cream", "butter", "oatmeal", "rice", "millet", "bulgur", "pasta", "flour", "sugar", "solt", "nuts", "beans", "peas", "potatoes", "cabbage", "tomatoes", "cucumbers", "apples", "pears", "bananas", "berries", "dried mushrooms", "olives", "vine"];
const verb1 = ["mix", "shake", "grind", "strain", "slice", "chop"];
const verb2 = ["bake", "heat up", "cool down", "let it stand for a while", "throw this out"];

//getting random quantity of ingredients from 2 to 10
const rand1 = Math.floor(Math.random()*9) + 2;
console.log("The ultimate mood-boosting recipe!")
console.log(`We get ${rand1} ingredients:`);
//getting a list of ingredients. The list is rand1 long. In addition we make random quantity of each product - grams
let list = [];
for (let counter = rand1; counter > 0; counter--) {
   let rand = Math.floor(Math.random()*31);   
   let grams = Math.floor(Math.random()*1000) + 100;
   if (!list.includes(products[rand])){
   list += ` ${grams} grams of ${products[rand]}\n`}
   else {
    list += ` ${grams} grams of ${products[rand + 1]}\n`
   }};
console.log(list);
// We choose what to do with the products - verb1 and verb2
const rand2 = Math.floor(Math.random()*6);
const rand3 = Math.floor(Math.random()*5);

console.log(`You need to ${verb1[rand2]} it all and ${verb2[rand3]}.`)
console.log("Enjoy!")
