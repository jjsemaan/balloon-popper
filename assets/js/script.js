document.addEventListener('DOMContentLoaded', function () {
    var nickname = localStorage.getItem('nickname');
    if (nickname) {
        var nicknameElement = document.getElementById('nickname-display');
        nicknameElement.textContent = 'Welcome, ' + nickname + '!';
    }
});

document.getElementById('game-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    var nickname = document.getElementById('nickname').value;
    localStorage.setItem('nickname', nickname); // Store the nickname in localStorage
    window.location.href = 'game.html'; // Redirect to game.html
});