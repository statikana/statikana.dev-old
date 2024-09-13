
const width = 10;
const height = 10;
var squares = []; /* representation of what the canvas should be showing ... s=snake, a=apple, x=blank */

var snake = [[2, 0], [1, 0], [0, 0]]; // head is front, tail is back

var canvas = document.querySelector(".snake-canvas");
var direction = "";

document.addEventListener("keydown", loadKey);

window.onload = createBoard;

function indexToCoordinates(index) {
	return [index % width, Math.floor(index / height)];
}

function coordinatesToIndex(x, y) {
	return x + y * width;
}

function createBoard() {
	for (let i = 0; i < width; i++) {
		squares.push([]);
		for (let j = 0; j < height; j++) {
			squares[i].push("x");
		}
	}
	snake.forEach(pair => {
		squares[pair[0]][pair[1]] = "s";
	});
	placeRandomApple();
	draw();
}

function placeRandomApple() {
	console.log(snake[0]);
	let apple_coords = snake[0];
	while (snake.includes(apple_coords)) {
		apple_coords = indexToCoordinates(Math.floor(Math.random() * width * height))
		console.log(apple_coords);
	}
	squares[apple_coords[0]][apple_coords[1]] = "a";

}

function loadKey(key) {
	/* checks for input and sets it to direction */
	if (!key.code.startsWith("Arrow")) {
		null;
	} else {
		direction = key.code;
		document.querySelector(".rep").innerHTML = direction;
		
	}
}

function frame() {
	move();
	appleCheck();
	checkForCollisions();
	draw();
}


function move() {
	/* moves the head in the indicated arrow direction */
	let head_index = snake[0];
	let new_head_index = 0;
	if (direction == "ArrowUp") {
		new_head_index = head_index + width;
	} else if (direction == "ArrowRight") {
		new_head_index = head_index + 1;
	} else if (direction == "ArrowDown") {
		new_head_index = head_index - width;
	} else if (direction == "ArrowLeft") {
		new_head_index = head_index - 1;
	}
	snake.push(new_head_index);
}

function appleCheck() {
	/* cuts the the tail of the snake if it doesnt get an apple */
	if (squares[snake[0]].classList.contains("apple")) {
		squares[snake[0]].classList.remove("apple");
	} else {
		snake.pop();
	}
}

function checkForCollisions() {
	let head = snake[0];
	let coords = indexToCoordinates(head);
	if (
		!(0 <= coords[0] < width) ||
		!(0 <= coords[1] < height)
	) {
		alert("u died L, reload page or sumn");
	}
}

function draw() {
	console.log("draw");
	let ctx = canvas.getContext("2d");
	for (let i = 0; i < 800; i+=80) {
		for (let j = 0; j < 800; j+=80) {
			item = squares[i/80][j/80];
			let fill = ""
			switch (item) {
				case "x":
					fill = "#222";
					break;
				case "s":
					fill = "#00ff00";
					break;
				case "a":
					fill = "#ff0000";
					break;
			}
			ctx.fillStyle = fill;
			ctx.fillRect(i, j, 80, 80);
		}
	}
}
