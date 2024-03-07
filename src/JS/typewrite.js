var nameText = document.getElementById('nameTypewrite');
var descriptionText = document.getElementById('descriptionTypewrite');

var writeDescriptionText = new Typewriter(descriptionText, {
    loop: false
});

var writeNameText = new Typewriter(nameText, {
    loop: false
});

function runWithDelay() {
    writeNameText.typeString("statikana")
        .callFunction(() => {document.querySelector(".Typewriter__cursor").remove();})
        .start();
    
    setTimeout(function() {
        writeDescriptionText.typeString("Well hello there! I'm statikana. And this is my website.")
            .callFunction(() => {document.querySelector(".Typewriter__cursor").remove();})
            .start();
    }, 2000);
}

runWithDelay();