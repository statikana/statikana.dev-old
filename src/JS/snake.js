let width = 10; // boxes
let height = 10; // boxes
let size = 10; // px
let squares = [];

let snake = [2, 1, 0]; // head is front, tail is back

let direction = "";
document.addEventListener("keydown", loadKey);

window.onload = createBoard;

function frame() {
	move();
	appleCheck();
	checkForCollisions();
}

function al() {
	alert("ok");
}

function createBoard() {
	let grid = document.querySelector(".grid");
	for (let i = 0; i < 100; i++) {
		var new_div = document.createElement("div");
		grid.appendChild(new_div);
		squares.push(new_div);
	};
}

function move() {
	let head_index = snake[0];
	let new_head_index = 0;
	if (direction == "ArrowUp") {
		new_head_index = head_index + width;
	} else if (direction == "ArrowRight") {
		new_head_index = head_index + 1;
	} else if (direction == "ArrowDown") {
		new_head_index = head_index - 10;
	} else if (direction == "ArrowLeft") {
		new_head_index = head_index - 1;
	}
	snake.push(new_head_index);
}

function appleCheck() {
	
}

function loadKey(key) {
	if (!key.code.startsWith("Arrow")) {
		alert(">");
	} else {
		direction = key.code;
		document.querySelector(".rep").innerHTML = direction;
	}
}
