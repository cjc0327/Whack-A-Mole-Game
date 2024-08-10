let score = 0;
let activeHole = null;
let gameInterval = null;

function startGame() {
    score = 0;
    document.getElementById('score').innerText = score;
    if (gameInterval) clearInterval(gameInterval);
    
    gameInterval = setInterval(() => {
        if (activeHole) {
            activeHole.classList.remove('active');
        }
        const randomHole = document.getElementById(`hole${Math.floor(Math.random() * 9) + 1}`);
        randomHole.classList.add('active');
        activeHole = randomHole;
    }, 1000);
}

document.querySelectorAll('.hole').forEach(hole => {
    hole.addEventListener('click', () => {
        if (hole.classList.contains('active')) {
            score++;
            document.getElementById('score').innerText = score;
            hole.classList.remove('active');
        }
    });
});

document.getElementById('start-button').addEventListener('click', startGame);
