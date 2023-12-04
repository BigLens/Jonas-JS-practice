'use strict';

document.querySelector('.check').addEventListener('click', check);
let secretNumber = Math.trunc(Math.random() * 21)
let score = 20;
let highscore = 0;
function check() {
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess) {
        document.querySelector('.message').innerText = 'No number'
    }else if(guess === secretNumber) {
        document.querySelector('.number').innerText = secretNumber;
        document.querySelector('.message').innerText = 'Correct Number!'; 
        if(secretNumber) {
            document.querySelector('body').style.backgroundColor = 'green';

            if(score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
    }
    }else if(guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').innerText = 'too high, try again';
            score--;   
            document.querySelector('.score').textContent = score; 
        }else {
            document.querySelector('.message').innerText = 'Game over!';
            document.querySelector('.score').textContent = 0;
        }               
    }else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').innerText = 'too low, try again';  
            score--;   
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').innerText = 'Game over!'
            document.querySelector('.score').textContent = 0;
        }
    }
}

