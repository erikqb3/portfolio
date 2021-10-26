let text1="Honest"
let text2="Hi! I'm Honest"

console.log(text1.length,text2.length)

function Pokemon(inputSpecies,inputType1,inputType2,inputMainColor) {
  this.species = inputSpecies;
  this.type1 = inputType1;
  this.type2 = inputType2;
  this.mainColor = inputMainColor;
}

const Honest = new Pokemon("Rotom","Electric",'Ghost',"Orange")


// let myTeam = {
//   Honest: new Pokemon("Rotom","Electric",'Ghost',"Orange")
// }

Pokemon.prototype.currentLevel = 48;

console.log(Honest.currentLevel)

let response = (Honest.currentLevel >= 50) ? "You can enter the tournament" : "Go do some more training";
console.log(response);