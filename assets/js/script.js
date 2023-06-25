document.addEventListener('DOMContentLoaded', function () {
    var nickname = localStorage.getItem('nickname');
    if (nickname) {
        var nicknameElement = document.getElementById('nickname-display');
        nicknameElement.textContent = 'Player Nickname: ' + nickname + '!';
    }
});

document.getElementById('game-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    var nickname = document.getElementById('nickname').value;
    localStorage.setItem('nickname', nickname); // Store the nickname in localStorage
    window.location.href = 'easy.html'; // Redirect to easy.html
});

