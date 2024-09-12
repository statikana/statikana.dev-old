var nameText = document.getElementById('nameTypewrite');

var writeNameText = new Typewriter(nameText, {
    loop: false
});

function runWithDelay() {
    writeNameText.typeString("im statikana")
        .callFunction(() => {document.querySelector(".Typewriter__cursor").remove();})
        .start();
}

runWithDelay();