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




/*
 * Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: 
the first element will represent a list of comma-separated numbers sorted in ascending order, 
the second element will represent a second list of comma-separated numbers (also sorted). 
Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. 
If there is no intersection, return the string false.
 * 
 */

function FindIntersection(strArr) { 

  var a = strArr[0].split(', ')
  var b = strArr[1].split(', ')
  var result = a.filter(x => b.find(a => a === x))
  return result.length > 0 ? result.join(',') : 'false'

}