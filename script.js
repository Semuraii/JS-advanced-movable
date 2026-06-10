const ball = document.getElementById('ball');
const container = document.getElementById('container');

let x = 0;
let y = 0;
const speed = 5;

function moveBall() {
    x += speed;
    y += speed;
}

