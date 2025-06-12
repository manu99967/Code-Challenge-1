//function to calculate ingredients according to number of cups
function calculateChaiIngredients(numberOfCups) {
//calculation of the ingredients
   const water = 200 * numberOfCups;
   const milk = 50 * numberOfCups;
   const tealeaves = 1 * numberOfCups;
   const sugar = 2 * numberOfCups;
//output
   console.log('To make ${numberOfCups} cups of Kenyan Chai, you will need');
   console.log('Water: ${water} ml');
   console.log('Milk: ${milk} ml');
   console.log('Tea Leaves (Majani): ${tealeaves} tablespoons');
   console.log('Sugar (Sukari): ${sugar teaspoons}');//next line
   console.log('Enjoy your Chai Bora!')


}
//prompt user 
const cups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make?"))
calculateChaiIngredients(cups);//call the function with user input3