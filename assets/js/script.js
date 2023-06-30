// Execute when the DOM loads
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the nickname from localStorage
    var nickname = localStorage.getItem('nickname');
    if (nickname) {
        // Display the nickname on the page
        var nicknameElement = document.getElementById('nickname-display');
        nicknameElement.textContent = nickname + ' !';
    }
});

// Add event listener to the form submission
document.getElementById('game-button').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve the nickname from the input field
    var nickname = document.getElementById('nickname').value;

    // Check if the nickname contains spaces
    if (nickname.includes(' ')) {
        alert('Nickname should not contain spaces!');
        return; // Stop further execution
    }

    // Store the nickname in localStorage
    localStorage.setItem('nickname', nickname);

    // Retrieve the selected difficulty level from the dropdown menu
    var level = document.getElementById('level').value;

    // Data Structure to map difficulty level to corresponding HTML file
    var levelToHtml = new Map([
        ['easy', 'easy.html'],
        ['medium', 'medium.html'],
        ['hard', 'hard.html']
    ]);

    // Retrieve the HTML file based on the selected difficulty level
    var htmlFile = levelToHtml.get(level);

    // Redirect the page to the corresponding HTML file
    window.location.href = htmlFile;
});
