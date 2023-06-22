//action when the balloon is clicked
balloon.addEventListeber('click', clickedIt);
let score = 0, count = 0;

function clickedIt () {
    score++;
    scoreBox.innerHTML = 'score:'+score;
    balloon.style.height = '1px';
}

//make the balloon move on the screen
function moveit () {
    balloon.style.height = '160px';
    balloon.style.left = Math.random()*800+'px';
    balloon.style.top = Math.random()*600+'px';

    count++;
    if (count == 20) {
        alert('Game Over!');
        clearInterval(timer);
    }
}

let timer = setInterval(moviIt, 1000);
