// unicode a = 97 unicode A = 65
let SWW = window.innerWidth;

closeMessage();
displayAlphaNav();
createDropDown();
showDropDown();
selectSortingOption();
displayGameCards_A(null);
checkLoggedIn();

function checkLoggedIn() {
  // window.onload = console.log(localStorage.getItem("loggedIn"));
  isLoggedIn = localStorage.getItem("loggedIn");
  console.log(isLoggedIn);
}

function displayAlphaNav() {
  let alphaNav = document.getElementById("alphaNav");
  let unicodeStart = 65;
  let divLetter;
  for (i=0; i<26; i++) {
    // divLetter = `&#${unicodeStart+i}`;
    divLetter = document.createElement('div')
    divLetter.innerHTML = `&#${unicodeStart+i}`;
    divLetter.classList.add("sortingLetter")
    alphaNav.appendChild(divLetter);
    divLetter.addEventListener('click', e=> {
      let letter = e.target.closest('div');
      console.log(letter.innerHTML);
    })
  }
}


function createDropDown() {
  let drop_button = document.createElement('div');
  drop_button.id = "dropDown_button";
  drop_button.textContent = "Sort by:"
  let drop_List = document.createElement('ul');
  drop_List.id = "dropDown_list";
  drop_List.classList.add("hidden");

  let drop_item1 = document.createElement('li');
  drop_item1.textContent = "Game Title";
  drop_item1.classList.add("dropDown_option");
  let drop_item2 = document.createElement('li');
  drop_item2.textContent = "Creator"
  drop_item2.classList.add("dropDown_option");
  let drop_item3 = document.createElement('li');
  drop_item3.textContent = "Date Contributed"
  drop_item3.classList.add("dropDown_option");
  let drop_item4 = document.createElement('li');
  drop_item4.textContent = "Play Style"
  drop_item4.classList.add("dropDown_option");
  let drop_item5 = document.createElement('li');
  drop_item5.textContent = "Fan-Art Style";
  drop_item5.classList.add("dropDown_option");

  let drop_holder = document.getElementById('dropDown_holder');
  drop_holder.appendChild(drop_button);
  drop_holder.appendChild(drop_List);
  drop_List.appendChild(drop_item1);
  drop_List.appendChild(drop_item2);
  drop_List.appendChild(drop_item3);
  drop_List.appendChild(drop_item4);
  drop_List.appendChild(drop_item5);
}

function showDropDown() {
  let dropDownBtn = document.getElementById("dropDown_button");
  dropDownBtn.addEventListener('mouseover', e=> {
    dropDownList = document.getElementById("dropDown_list");
    dropDownList.classList.toggle("hidden");
  })
  dropDownBtn.addEventListener('click', e=> {
    dropDownList = document.getElementById("dropDown_list");
    dropDownList.classList.toggle("hidden");
  })
}

function selectSortingOption() {
  let searchOptions_Array = document.getElementById("dropDown_list").children;
  console.log(searchOptions_Array);
  for(i=0;i<searchOptions_Array.length;i++) {
    // console.log("hellow")
    searchOptions_Array[i].addEventListener("click", e=> {
      let selected = e.target.closest('li.dropDown_option')
      resetCards(selected);
    })
  }
}

function resetCards(selected) {
  console.log(selected.innerHTML);
  let GC_holder = document.getElementById('gameCard_holder');
  let gameCount = GC_holder.childElementCount;
  for (i=(gameCount-1);i>=0;i--) {
    GC_holder.children[i].remove();
  }
  console.log("clear");
  displayGameCards_A(selected);
}

function sortJSON(sortOption) {
  let jsonFile  = "../gameLibrary/gamesList.json";
  console.log(sortOption)
  fetch(jsonFile)
  .then((response) => response.json())
  .then((jsObject) => {
    // jsObject.forEach((game)=> {
      switch(sortOption) {
        case "Game Title":
          console.log(jsObject.title);
          break;
        case "Creator":
          console.log(jsObject);
          break;
        case "Date Contributed":
          console.log(jsObject);
          break;
        case "Play Style":
          console.log(jsObject);
          break;
        case "Fan-Art Style":
          console.log(jsObject);
          break;
        default:
          console.log(jsObject);
      }
    // })
  })
  // const points = ["a","C","F","z","e","r"];
  // points.sort(function(a, b){return a-b}); //numeric
  // // points.sort(); //apha
  // console.log(points)
}

function displayGameCards_A(sortOption) {
  let GC_holder = document.getElementById('gameCard_holder');
  let jsonFile  = "../gameLibrary/gamesList.json";
  // console.log(GC_holder.childElementCount)

  fetch(jsonFile)
  .then((response) => response.json())
  .then((jsObject) => {
    sortJSON(sortOption);
    jsObject.forEach((game)=> {
      let GC_card = document.createElement('div');
      GC_card.classList.add('gameCard')
      let side_L = document.createElement('div');
      side_L.classList.add('section_L');
      let info = document.createElement('div');
      info.classList.add('gameInfo');
      let side_R = document.createElement('div');
      side_R.classList.add('section_R');
      // side_R.innerHTML = game.description;
  
  
      let img = document.createElement('img');
      img.setAttribute('src',game.picture);
      let title = document.createElement('h4');
      title.innerHTML = game.title;
      let author = document.createElement('p');
      author.innerHTML = game.author;
      let date = document.createElement('p');
      date.innerHTML = game.dateAdded;
      let descript = document.createElement('div')
      descript.innerHTML = game.description;
      // console.log(jsObject)

      GC_holder.appendChild(GC_card);
      GC_card.appendChild(side_L);
      GC_card.appendChild(side_R);
    
      side_L.appendChild(img);
      side_R.appendChild(info);
      side_R.appendChild(descript);
      side_L.appendChild(title);
      info.appendChild(author);
      info.appendChild(date);

      GC_card.addEventListener("click", e=> {
        let card = e.target.closest('div.gameCard');
        console.log(card);
        location.href = game.game_url
      })
    })
  })

}

function closeMessage() {
  let prevPage = document.referrer;
  let message = document.getElementById("gameMessage");
  if (prevPage != "https://erikqb3.github.io/portfolio/WDD230_FinalProject/FinalProject/home/index.html") {
    message.classList.add("hidden");
  }

  let messageBtn = document.getElementById("gameMessage");
  messageBtn.addEventListener('click',e=> {
    message.classList.add("hidden");
  })
}