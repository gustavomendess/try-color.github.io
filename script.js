const divsBall = document.getElementsByClassName('ball');
const colortext = document.getElementById('rgb-color');
const answerText = document.getElementById('answer');
const restartButton = document.getElementById('reload-game');
const colors = [];

function randomNumber(mul) {
   const number = Math.floor(Math.random() * mul);
   return number;
};

function randomColor() {
   const rgb = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`; 
   return rgb;  
};

function clickOnTheBall(event) {
   const selectedColor = event.target.style.backgroundColor;
   if (selectedColor === colortext.textContent) {
     answerText.textContent = 'Acertou!'; 
   } else {
       answerText.textContent = 'Errou! Tente novamente!'
   }
}

for (let ball = 0; ball < divsBall.length; ball++) {
   const color = randomColor();
   divsBall[ball].style.backgroundColor = color;
   colors[ball] = color;
   divsBall[ball].addEventListener('click', clickOnTheBall)
};

function addRandomColor() {
    colortext.textContent = colors[randomNumber(6)]
}

addRandomColor()

function reload() {
    window.location.reload();
}

restartButton.addEventListener('click', reload)

