// Execute when the DOM loads
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the nickname from localStorage
    let nickname = localStorage.getItem('nickname');
    if (nickname) {
        // Display the nickname on the page
        let nicknameElement = document.getElementById('nickname-display');
        nicknameElement.textContent = nickname + ' !';
    }
});



// Add event listener to the form submission
document.getElementById('game-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve the nickname from the input field
    let nickname = document.getElementById('nickname').value;

    // Check if the nickname contains spaces
    if (nickname.includes(' ')) {
        alert('Nickname should not contain spaces!');
        return; // Stop further execution
    }

    // Store the nickname in localStorage
    localStorage.setItem('nickname', nickname);
    
    // Retrieve the selected difficulty level from the dropdown menu
    let level = document.getElementById('level').value;

    // Data Structure to map difficulty level to corresponding HTML file
    let levelToHtml = new Map([
        ['easy', 'easy.html'],
        ['medium', 'medium.html'],
        ['hard', 'hard.html']
    ]);

    // Retrieve the HTML file based on the selected difficulty level
    let htmlFile = levelToHtml.get(level);
    
    // Redirect the page to the corresponding HTML file
    window.location.href = htmlFile;
    
});



// Function to save the sound option to localStorage
function saveSoundOption() {
    // Retrieve the dropdown element
    const soundDropdown = document.getElementById('soundDropdown');

    // Get the selected value from the dropdown
    const soundOption = soundDropdown.value;

    // Save the sound option to localStorage
    localStorage.setItem('sound', soundOption);
}





// Action when the balloon is clicked
let score = 0;
let count = 0;

// Retrieve score-label element
let scoreLabel = document.getElementById('score-label');

//display the initial score as 0
scoreLabel.innerHTML = '&nbsp;&nbsp;&nbsp;Score: ' + score; // Add three spaces before "Score: "

// Retrieve the audio element
const popSound = document.getElementById('pop-sound');
const popBubbles = document.getElementById('pop-bubbles');
const popNegative = document.getElementById('pop-negative');

// Select the balloon elements and the score box element from the DOM
const redBalloon = document.getElementById('red-balloon');
const blueBalloon = document.getElementById('blue-balloon');
const yellowBalloon = document.getElementById('yellow-balloon');
const greenBalloon = document.getElementById('green-balloon');
const redHeartBalloon = document.getElementById('red-heart-balloon');
const pinkBalloon = document.getElementById('pink-balloon');
const purpleBalloon = document.getElementById('purple-balloon');
const scoreBox = document.getElementById('score-box');

// Click events of the balloons
redBalloon.addEventListener('click', poppedBalloon);
blueBalloon.addEventListener('click', poppedBalloon);
yellowBalloon.addEventListener('click', poppedBalloon);
greenBalloon.addEventListener('click', poppedBalloon);
redHeartBalloon.addEventListener('click', poppedBalloon);
pinkBalloon.addEventListener('click', poppedBalloon);
purpleBalloon.addEventListener('click', poppedBalloon);

// Modal element
const modal = document.getElementById('game-over-modal');
const playAgainBtn = document.getElementById('play-again-btn');
const homeBtn = document.getElementById('home-btn');

playAgainBtn.addEventListener('click', function () {
    location.reload(); // Refresh the page
});

homeBtn.addEventListener('click', function () {
    window.location.href = 'index.html'; // Redirect to the home page
});

// Retrieve the sound option from localStorage
let soundOption = localStorage.getItem('sound');


function poppedBalloon() {
    // Check if `this` is equal to `redBalloon`
    if (this === redBalloon) {
        score--; // Decrement score by 1
        if (soundOption === "true") {
            popNegative.play(); // Play the pop sound
        }
    } else if (this === redHeartBalloon) {
        score += 2; // Increment score by 2 if `this` is equal to `redHeartBalloon`
        if (soundOption === "true") {
            popBubbles.play(); // Play the pop sound
        }
    } else {
        score++; // Increment score by 1 for other balloons
        if (soundOption === "true") {
            popSound.play(); // Play the pop sound
        }
    }

    // Update the score label with the new score
    scoreLabel.innerHTML = '&nbsp;&nbsp;&nbsp;Score: ' + score;

    // Set the height of all balloons to 1px
    blueBalloon.style.height = '1px';
    greenBalloon.style.height = '1px';
    yellowBalloon.style.height = '1px';
    redBalloon.style.height = '1px';
    redHeartBalloon.style.height = '1px';
    pinkBalloon.style.height = '1px';
    purpleBalloon.style.height = '1px';
}

function moveBalloon() {
    // Get the screen width
    let screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    // Reset the balloon sizes and positions
    if (window.innerWidth <= 768) {
        // Smaller screen sizes
        redBalloon.style.height = 150 + 'px';
        blueBalloon.style.height = 150 + 'px';
        yellowBalloon.style.height = 150 + 'px';
        greenBalloon.style.height = 150 + 'px';
        redHeartBalloon.style.height = 150 * 1.5 + 'px';
        pinkBalloon.style.height = 150 + 'px';
        purpleBalloon.style.height = 150 + 'px';
    } else {
        // Larger screen sizes
        redBalloon.style.height = 250 + 'px';
        blueBalloon.style.height = 250 + 'px';
        yellowBalloon.style.height = 250 + 'px';
        greenBalloon.style.height = 250 + 'px';
        redHeartBalloon.style.height = 250 * 1.5 + 'px';
        pinkBalloon.style.height = 250 + 'px';
        purpleBalloon.style.height = 250 + 'px';
    }

    // Show the balloons
    redBalloon.style.visibility = 'visible';
    blueBalloon.style.visibility = 'visible';
    yellowBalloon.style.visibility = 'visible';
    greenBalloon.style.visibility = 'visible';
    redHeartBalloon.style.visibility = 'visible';
    pinkBalloon.style.visibility = 'visible';
    purpleBalloon.style.visibility = 'visible';

    // Function to generate random coordinates
    function generateRandomCoordinates(count) {
        let screenWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        let screenHeight =
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight;

        let coordinates = [];

        for (let i = 0; i < count; i++) {
            let balloonWidth = 120; // Width of the balloons
            let balloonHeight = 150; // Height of the balloons

            let randomX = Math.floor(Math.random() * (screenWidth - balloonWidth));
            let randomY = Math.floor(Math.random() * (screenHeight - balloonHeight));
            coordinates.push([randomX, randomY]);
        }

        return coordinates;
    }

    // Generate random coordinates for all 7 balloons
    let balloonCoordinates = generateRandomCoordinates(7);

    // Create an array of balloon elements
    let balloons = [redBalloon, blueBalloon, yellowBalloon, greenBalloon, redHeartBalloon, pinkBalloon, purpleBalloon];

    // Apply the random coordinates to the balloons using a loop
    for (let i = 0; i < balloons.length; i++) {
        balloons[i].style.left = balloonCoordinates[i][0] + 'px';
        balloons[i].style.top = balloonCoordinates[i][1] + 'px';
    }

    count++; // Increment the count of balloon movements


    if (count == 32) {
        clearInterval(timer);
        modal.style.visibility = 'visible'; // Display the modal
        redBalloon.style.visibility = 'hidden';
        blueBalloon.style.visibility = 'hidden';
        yellowBalloon.style.visibility = 'hidden';
        greenBalloon.style.visibility = 'hidden';
        redHeartBalloon.style.visibility = 'hidden';
        pinkBalloon.style.visibility = 'hidden';
        purpleBalloon.style.visibility = 'hidden';

        return; // Terminate the code execution after displaying the modal
    }
}

// Function to save the difficulty level
function saveLevelOption() {
    // Retrieve the dropdown element
    const levelDropdown = document.getElementById('level');

    // Get the selected value from the dropdown
    const levelOption = levelDropdown.value;

    // Save the level option to localStorage
    localStorage.setItem('level', levelOption);
}

// Retrieve the level option from localStorage
let levelOption = localStorage.getItem('level');

// Set the timer interval based on the selected difficulty level
let timerInterval;
if (levelOption === 'easy') {
    timerInterval = 1000;
} else if (levelOption === 'medium') {
    timerInterval = 700;
} else {
    timerInterval = 500;
}

// Start the timer with the selected interval
let timer = setInterval(moveBalloon, timerInterval);





// Start the timer with the new interval
//timer = setInterval(moveBalloon, timerInterval);


