window.onload = function () {
	document.addEventListener("keyup", loadKey);
}

function loadKey(key) {
	part = document.querySelector(".rep");
	part.textContent = key.code;
	part.innerHTML = key.code;
}