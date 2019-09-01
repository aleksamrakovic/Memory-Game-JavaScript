let container = document.querySelector('.container');
let clicks = [];
let counter = 0;

createGrid();

let boxes = document.querySelectorAll('.box');
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click',game);
}

function game() {
  this.removeEventListener('click',game);
  counter++;
  clicks.push(this);
  let back = this.querySelector('.back');
  let front = this.querySelector('.front');

  front.style.transform = 'perspective(900px) rotateY(180deg)';
  back.style.transform = 'perspective(900px) rotateY(0deg)';
  if (counter == 2) {
    checkTiles();
  }
}
function checkTiles() {
    clearTiles();
  let box1 = clicks[0];
  let box2 = clicks[1];

  let box1Back = box1.querySelector('.back');
  let box1Front = box1.querySelector('.front');

  let box2Back = box2.querySelector('.back');
  let box2Front = box2.querySelector('.front');

  if (box1Back.innerHTML == box2Back.innerHTML) {
    clicks = [];
    counter = 0;
    addClickTiles();
  }else {
    setTimeout(function () {
      box1Front.style.transform = 'perspective(900px) rotateY(0deg)';
      box1Back.style.transform = 'perspective(900px) rotateY(180deg)';

      box2Front.style.transform = 'perspective(900px) rotateY(0deg)';
      box2Back.style.transform = 'perspective(900px) rotateY(180deg)';
      addClickTiles();
  }, 700);
    clicks = [];
    counter = 0;
  }
}

function createGrid() {
  let text = '';
  for (var i = 0; i < 36; i++) {
    let rand = Math.floor(Math.random() * icons.length);
    text += '<div class="box"><div class="back">'+icons[rand]+'</div><div class="front"></div></div>';
    icons.splice(rand,1);
  }
  container.innerHTML = text;
}

function clearTiles() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].removeEventListener('click',game);
  }
}
function addClickTiles() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click',game)
  }
}
