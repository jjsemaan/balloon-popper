/*
Source book ISBN 978-1-84078-955-3 Coding with HTML & JavaScript
This book provided a very basic format of this game 
A printscreen of the original game is available in the README.md file
The code provided by the above mentioned book was written in a .html file that includes styles and scripts within
For this game css and js are separated into styles.css and script.js files
Improvised code will be prefixed 'Improvised' in a comment 
*/

const balloon = document.getElementById('balloon'); 
const scoreBox = document.getElementById('score-box'); 


// Action when the balloon is clicked
balloon.addEventListener('click', clickedIt);
let score = 0;
let count = 0;

function clickedIt() {
    score++;
    scoreBox.innerHTML = 'score: ' + score;
    balloon.style.height = '1px';
}

// Make the balloon move on the screen
function moveIt() {
    balloon.style.height = '160px';
    balloon.style.left = Math.random() * 800 + 'px';
    balloon.style.top = Math.random() * 600 + 'px';

    count++;
    if (count === 20) {
        alert('Game Over!');
        clearInterval(timer);
    }
}

let timer = setInterval(moveIt, 1000);

