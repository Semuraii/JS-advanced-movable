const ball = document.getElementById('ball');
const container = document.getElementById('container');

let x = 0;
let y = 0;
const speed = 5;

function moveBall(dx, dy) {
    x += dx;
    y += dy;
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
}

document.getElementById("up").addEventListener("click", () => {
    moveBall(0, -speed);
});

document.getElementById("down").addEventListener("click", () => {
    moveBall(0, speed);
});

document.getElementById("left").addEventListener("click", () => {
    moveBall(-speed, 0);
});

document.getElementById("right").addEventListener("click", () => {
    moveBall(speed, 0);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        moveBall(0, -speed);
    }

    if (event.key === "ArrowDown") {
        moveBall(0, speed);
    }

    if (event.key === "ArrowLeft") {
        moveBall(-speed, 0);
    }

    if (event.key === "ArrowRight") {
        moveBall(speed, 0);
    }
});
