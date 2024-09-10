var nameText = document.getElementById('nameTypewrite');

var writeDescriptionText = new Typewriter(descriptionText, {
    loop: false,
    delay: 85
});

var writeNameText = new Typewriter(nameText, {
    loop: false,
    delay: 100
});

function runWithDelay() {
    writeNameText.typeString("my name is statikana")
        .callFunction(() => {document.querySelector(".Typewriter__cursor").remove();})
        .start();
}

runWithDelay();