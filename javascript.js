//So this div will be the container holding the pixels to change color not the button
const container2 = document.createElement('div');
container2.classList.add('canvascontainer');

body = document.querySelector("body");
body.appendChild(container);

let startingSize = 16;

const changeSize = document.querySelector(".changeSize");

makeGrid(startingSize);

//Here's where we make the grid
function makeGrid(startingSize){

    for(let i = 0; i < startingSize; i++){
        const create = document.createElement("div");
        create.classList.add("rowcontainer");
        canvascontainer.appendChild(create);

        for(let j = 0; j < startingSize; j++){
            const square = document.createElement("div");
            square.textContent = "";
            const list = square.classList;
            list.add("rowitem");
            list.add(`col${j}`);

            create.appendChild(square);

            square.addEventListener("mouseenter", (e) => {
                e.target.style.background = randomcolor();
            })
        }
    }

    changeSize.addEventListener("click", () => {
        let numberOfSquares = prompt("Please enter a number between 0 ad 100.");
        if (numberOfSquare !== null) {
            numberOfSquares = parseint(numberOfSquares);
            if(!isNaN(numberOfSquares) && numberOfSquares > 0 && numberOfSquares <= 100) {
                canvascontainer.innerHTML = '';
                createGrid(numberOfSquares);
            } else {
                alert("Please enter a valid number");
            }
        }
    })

    function random(min, max){
        return Math.floor((Math.random())*(max-min+  1)) + min;
    }

    function randomColor(){
        const r = random(0, 255);
        const g = random(0, 255);
        const b = random(0, 255);
        const rgb = `rgb(${r},${g}, ${b})`;
        return rgb;
    }

}