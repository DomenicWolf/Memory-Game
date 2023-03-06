const gameContainer = document.getElementById("game");
let click = false;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    /*if(restart){
      newDiv.classList.remove(color)
      newDiv.classList.add(color)
    }*/

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    newDiv.style.backgroundColor = '#ffe4c4';
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
let cards = []
let colors = []
let test = true;
let counter = document.querySelector('h2')
let jsCounter = 0;

let started = false;
let restart = false;
let newGame = document.getElementsByTagName('div')
// TODO: Implement this function!
let restartButton = document.getElementById('Restart button')
restartButton.addEventListener('click',function(){
  restart = true;
})
let startButton = document.getElementById('Start button')
startButton.addEventListener('click',function(){
  started = true;
})
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  if(click)return;
if(started==true){
jsCounter++
counter.innerText=jsCounter
let card = event.target;
  card.style.backgroundColor = card.classList[0];
  colors.push(event.target.className)
  cards.push(event.target)
  if(cards.length>=2)click=true;

  for(let i = 0; i < cards.length; i++){
    if(cards[0]===cards[1])
    test = false;
  }

  for(let i = 0; i < colors.length; i++){
    let color1 = colors[0]
    if(color1==colors[1]){
      for(let j = 0; j < cards.length; j++){
        let first = cards[0];
        let second = cards[1];
        first.classList.add('flipped')
        second.classList.add('flipped')
        first.removeEventListener("click", handleCardClick);
        second.removeEventListener("click", handleCardClick);
        cards.splice(0,cards.length)
        colors.splice(0,colors.length)
        click = false;
        if(test==false){
          first.classList.remove('flipped')
          second.classList.remove('flipped')
         }
      }
    }
  }
  setTimeout(function(){
    
    if(event.target.classList.contains('flipped')==false){
    event.target.style.backgroundColor='#ffe4c4';
    click = false;
    colors.splice(0,colors.length);
    cards.splice(0,cards.length);
  }
  },1500)
  
  
  
    
  let previousHS=localStorage.getItem('score')
let newScore=localStorage.setItem('score',jsCounter)


if(previousHS>newScore){
  localStorage.setItem('score',newScore)
}
  


  }
}



/*if(restart){

  refreshPage()
    /*shuffle(colors);

    
    newGame.classList.remove('flipped');
    cards.splice(0,cards.length);
    colors.splice(0,colors.length);
    console.log(newGame)

  }
  ;
} */
// when the DOM loads
function refreshPage(){
    window.location.reload()
}
createDivsForColors(shuffledColors);
