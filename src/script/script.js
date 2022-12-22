"use strict";

const check = document.querySelector('.check');
const again = document.querySelector('.again');
const guess = document.querySelector('.guess');
const number = document.querySelector('#num');
const msg = document.querySelector('.msg');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
let scorePoints = 10;
let highscorePoints = 0;
let canClick = true;

let myNumber = Math.trunc(((Math.random()) * scorePoints) + 1);
score.innerHTML = scorePoints;
highscore.innerHTML = highscorePoints;


console.log(myNumber);

check.addEventListener('click', function(){
    if (canClick){
        scoreCalc();
    }else{
        msg.innerHTML = "Click the Again button to start!"
    }
});

const scoreCalc = function(){
    scorePoints--;
    score.innerHTML = scorePoints;
    if (Number(guess.value) !== myNumber && scorePoints > 0){
        if(guess.value > myNumber){
            msg.textContent = "Lower!";
        }else{
            msg.textContent = "Higher!";
        }
        document.body.style.background = "#bb4444";
    }else if (Number(guess.value) === myNumber && scorePoints >= 0){
        msg.textContent = "Correct Answer!";
        document.body.style.background = "#59bb62";
        number.textContent = guess.value;
        highscoreFun();
        canClick = false;
    }else{
        msg.innerHTML = "You Lost!";
        canClick = false;
    }
}

const highscoreFun = function(){
    let higherscore = scorePoints + 1;
    if(higherscore >= highscorePoints){
        highscore.textContent = higherscore;
        highscorePoints = higherscore;
    }else{
        highscore.textContent = highscorePoints;
    }
}



again.addEventListener('click', function(){
    number.textContent = '?';
    guess.value = '';
    scorePoints = 10;
    score.innerHTML = scorePoints;
    myNumber = Math.trunc(((Math.random()) * scorePoints) + 1);
    console.log(myNumber);
    document.body.style.background = "#333";
    msg.textContent = "Start guessing...";
    canClick = true;
})
