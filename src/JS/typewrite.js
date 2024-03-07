var nameText = document.getElementById('nameTypewrite');
var descriptionText = document.getElementById('descriptionTypewrite');

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
    
    setTimeout(function() {
        writeDescriptionText.typeString("Welcome to my website.")
            .callFunction(() => {document.querySelector(".Typewriter__cursor").remove();})
            .start();
    }, 3000);
}

runWithDelay();