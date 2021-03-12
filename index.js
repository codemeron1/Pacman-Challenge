let divWorld = document.querySelector('#world');
let divPacman = document.querySelector('#pacman');
let divScore = document.querySelector('#score');

let score = 0;
let pacman = {
    x: 1,
    y: 1
}

//15 x 30
let world = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function DisplayMonitor() {
    let output = '';

    for (let i = 0; i < world.length; i++) {
        output += "<div class = 'row'>";
        for (let j = 0; j < world[i].length; j++) {
            if (world[i][j] == 1) {
                output += "<div class = 'brick'></div>";
            } else if (world[i][j] == 2) {
                output += "<div class = 'coin'></div>";

            } else if (world[i][j] == 0) {
                output += "<div class = 'empty'></div>";
            }
        }
        output += "</div>";
    }
    divWorld.innerHTML = output;
}
function DisplayPacman() {
    divPacman.style.top = pacman.y * 20 + "px";
    divPacman.style.left = pacman.x * 20 + "px";
    divScore.innerHTML = score;
    console.log(pacman.y)
    console.log(pacman.x)
}

DisplayMonitor();
DisplayPacman();

//1. Identify if its a brick

document.onkeydown = function (e) {

    if (e.keyCode == 38) { //TOP
        if (world[pacman.y - 1][pacman.x] == 1){
            console.log("wall");
        }else{
            pacman.y--;
        } 
    } else if (e.keyCode == 40) { //BOTTOM
        if (world[pacman.y + 1][pacman.x] == 1){
            console.log("wall");
        }else{
            pacman.y++;
        }
    } else if (e.keyCode == 37) { //LEFT
        if (world[pacman.y][pacman.x - 1] == 1){
            console.log("wall");
        }else{
            pacman.x--;
        }
    } else if (e.keyCode == 39) { //RIGHT
        if (world[pacman.y][pacman.x + 1] == 1){
            console.log("wall");
        }else{
            pacman.x++;
        }
    }

    if (world[pacman.y][pacman.x] == 2) {
        world[pacman.y][pacman.x] = 0;
        score += 10;
        DisplayMonitor();
    }

    DisplayPacman();
}