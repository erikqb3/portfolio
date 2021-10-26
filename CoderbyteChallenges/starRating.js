function StarRating(str) { 
  // code goes here 
  let decimal = str-Math.floor(str)
  let newDecimal = 0;
  starCounter = 0; //make star holder
  starHolder = [];
  fullStar = "full";
  halfStar ="half";
  emptyStar = "empty";
  let starOutput = "";
  
  //determine if half or whole star
  if (decimal<0.25)  {
    newDecimal = 0;
  }
  else if ((decimal >=0.25) && (decimal < 0.75)) {
    newDecimal = 0.5;
  }
  else {
    newDecimal = 1;
  }

   
  str = Math.floor(str) + newDecimal; //get number for star rating


  //print full stars
  for (i=0; i<(str-1); i++) {
    starHolder.push(fullStar)
    starCounter ++ //print full star 
  }

  //print(remaining stars)
  if (newDecimal == 0.5) {
    starHolder.push(halfStar)
    starCounter++
  }
  else if (newDecimal == 1) {
    starHolder.push(fullStar)
    starCounter++
  }


let difference = 5-starCounter;

//print empty stars to fill fill starHolder
for (i=0;i < difference; i++) {
  starHolder.push(emptyStar)
  starCounter++
}

  console.log(starHolder)
  for (i=0; i<5; i++){
    starOutput = starOutput+ " " + starHolder[i];
  }


  return starOutput; 

}
   
// keep this function call here 
console.log(StarRating("2.43"));
