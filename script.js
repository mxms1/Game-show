const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const tries = document.querySelectorAll('.tries') ;
const start = document.getElementsByClassName('btn__reset')[0];
const phrases = ['dull as paint','a diamond is forever','knight in shinning armour','bells and whistles','big fish in a small pond']
let arrayOfLetters = [];
let missed = 0;
const overlay = document.getElementById('overlay');
var element = document.getElementById("ul");



function getRandomPhraseAsArray(arr){
  let i = Math.floor(Math.random() * phrases.length);

  const currentArray = arr[i];

  for (let n = 0; n < currentArray.length; n++){
  const letters = currentArray.charAt(n);

  arrayOfLetters.push(letters);
}
}



start.addEventListener('click', function(){
console.log('button pressed');
overlay.style.display = 'none';

for(let i = 0; i < tries.length; i++ ){
  tries[i].firstElementChild.setAttribute('src','images/liveHeart.png');


}




if(start.textContent == 'Play Again'){
    missed = 0;
    const ulletter = document.querySelector("#phrase ul");
        ulletter.textContent = "";
          arrayOfLetters = []

const keyrow = keyboard.querySelectorAll('.keyrow');


  for( let i = 0; i < keyrow.length; i++ ){
   const keys = keyrow[i].children;
      for( let i = 0; i < keys.length; i++ ){

  keys[i].classList.remove('chosen');
  keys[i].removeAttribute("disabled");}

}

getRandomPhraseAsArray(phrases);
addPhraseToDisplay(arrayOfLetters);

}
if(start.textContent == 'Start Game'){

getRandomPhraseAsArray(phrases);
addPhraseToDisplay(arrayOfLetters);
arrayOfLetters = [];

}});






function addPhraseToDisplay(arr){

for( let i = 0; i < arr.length; i++ ){

  var li = document.createElement("li");
var node = document.createTextNode(arr[i]);
li.appendChild(node);

element.appendChild(li);

if(arrayOfLetters[i].includes(' ') == false){
li.classList.add('letter');
}else{
li.classList.add('space');


}

  }

}



function checkLetter(buttonClicked){

  const ul = document.getElementById('ul');
  const listItems = ul.getElementsByTagName('li');

  let letterFound = "null";
for( let i = 0; i < listItems.length ; i++){

  const listItem = listItems[i];
  const buttonClicked = event.target;


  const a = buttonClicked.textContent;
 const b = listItem.textContent.toLowerCase();

    if(a === b ){
      listItem.classList.add('show');
      letterFound = a;


  }

  }



      return letterFound;
  }









keyboard.addEventListener('click', (event) =>{
  const button = event.target;
  const buttonLetter = button.textContent;

  if(button.tagName == 'BUTTON'){
    button.classList.add('chosen');
    button.setAttribute("disabled", true);
    checkLetter(buttonLetter);




  const letterFound = checkLetter(buttonLetter);
  if(letterFound === "null"){

    tries[missed].firstElementChild.setAttribute('src','images/lostHeart.png');
      missed++;
}}

checkWin();


});


function checkWin(){
  const letters = document.querySelectorAll('.letter');
  const shownLetters = document.querySelectorAll('.show');
  const message = overlay.firstElementChild;
  const button = overlay.lastElementChild;


if( shownLetters.length == letters.length){
  overlay.style.display = 'flex';
  overlay.className = 'win';
  message.innerHTML = 'Yayy you won!';
  button.innerHTML = 'Play Again';
}

if( missed >= 5 ){
  overlay.style.display = 'flex';
  overlay.className= 'lose';
  message.innerHTML = 'Oopsie you lost!'
  button.innerHTML = 'Play Again';



}



}
