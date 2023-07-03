/**
 * Execute when the DOM loads
 */
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the nickname from localStorage
    let nickname = localStorage.getItem('nickname');
    if (nickname) {
        // Display the nickname on the page
        let nicknameElement = document.getElementById('nickname');
        nicknameElement.textContent = nickname;
    }
});



/**
 * Add event listener to the form submission
 */
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

/**
 * Function to save the sound option to localStorage
 */
function saveSoundOption() {
    // Retrieve the dropdown element
    const soundDropdown = document.getElementById('soundDropdown');

    // Get the selected value from the dropdown
    const soundOption = soundDropdown.value;

    // Save the sound option to localStorage
    localStorage.setItem('sound', soundOption);
}

/**
 * Function to save the difficulty level
 */
function saveLevelOption() {
    // Retrieve the dropdown element
    const levelDropdown = document.getElementById('level');

    // Get the selected value from the dropdown
    const levelOption = levelDropdown.value;

    // Save the level option to localStorage
    localStorage.setItem('level', levelOption);
}
