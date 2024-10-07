import *as seriesFunctions from './module.js';

console.log("");

//1st
seriesFunctions.greet('Harry','Potter');
console.log("");

//2nd 
const speedInKm = seriesFunctions.convertSpeed(60, 'mph');
console.log(`Speed in km/h: ${speedInKm.toFixed(2)}`);
console.log("");

//3rd
const fuelCost = seriesFunctions.calculateFuelCost(600, 25, 1.2); // Example: 600 km, 25 km per liter, $1.2 per liter
console.log(`Total fuel cost: $${fuelCost.toFixed(2)}`);
console.log("");

//4th
const mediaSuggestionsFantasy = seriesFunctions.recommendMedia("fantasy");
console.log(`Recommended Fantasy movies and series: ${mediaSuggestionsFantasy.join(", ")}`);
console.log("");