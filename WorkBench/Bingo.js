let goodCombos = [];


function playGame () {
  let testCombo = getCombo();
  let jixu = false
  let complete = false;
  // console.log(goodCombos.length)
  // console.log(testCombo)

  if (goodCombos.length == 0) {
    document.getElementById("combo").innerHTML = testCombo;
    goodCombos.push(testCombo);
  }
  else {
    while ((!jixu) && (!complete)) {
      testCombo=getCombo();
      results = checkCombo(goodCombos,testCombo,jixu,complete);
      jixu = results[0];
      complete = results[1];
      console.log(jixu, complete)
    }
    if ((results[0] == true) && (results[1] == false)) {
      document.getElementById("combo").innerHTML = testCombo;
      goodCombos.push(testCombo);
      console.log(goodCombos)
      document.getElementById("allCombos").innerHTML = goodCombos.join('\n');
    }
    else if ((results[0] == false) && (results[1] == true)) {
      console.log("hello")
      document.getElementById("combo").innerHTML = "Black Out"
    }
    console.log(results[0], results[1], goodCombos.length);
    // goodCombos.forEach(checkCombo);
  }
}



function getCombo () {
  let letters = ["A","B","C","D","E"];
  let theColumn = letters[Math.floor(Math.random() * 5)] // range is A - E
  let theRow = Math.floor(Math.random() * 5) + 1 //range is 1 - 5
  let combo = theColumn + theRow;
  // document.getElementById("combo").innerHTML = combo;
  return combo;
}

function checkCombo (goodCombos,testCombo,jixu, complete) {
  let results = [];
  let strikes = 0;
  console.log(testCombo);
  for (i=0; i<goodCombos.length; i++) {
    if (testCombo == goodCombos[i]) {
      strikes += 1;
      console.log(strikes, goodCombos.length);
    }
  }
  if (strikes > 0) {
    jixu = false;
  }
  else {
    jixu = true;
  }


  if (goodCombos.length == 25) {
    complete=true;
  }

  results.push(jixu);
  results.push(complete);
  return results;

}





let button = document.getElementById("theButton").addEventListener("click",playGame)