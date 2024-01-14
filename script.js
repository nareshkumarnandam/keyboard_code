let heading = document.getElementById("heading");
let keyCode = document.getElementById("code");
let highlight = document.getElementById("highlight");

var keyWithoutPrefix;
var ctrl = 17;
document.addEventListener('keydown', function(event) {
    // keyWithoutPrefix = event.code.replace('Key', '').replace('Digit', '');
    console.log(event);
    heading.innerText = `You pressed`;
    highlight.innerText = event.key;
    keyCode.classList.add("pressed");
    keyCode.innerText = `${event.keyCode}`;
    if(event.key === " "){
        highlight.innerText = "Space";
    }

});

const copySound = document.getElementById('copySound');
const pasteSound = document.getElementById('pasteSound');
const cutSound = document.getElementById('cutSound');
const undoSound = document.getElementById('undoSound');
const saveSound = document.getElementById('saveSound');



document.addEventListener('keydown', function(e){
    if(e.ctrlKey){
        switch (e.key.toLowerCase()) {
            case 'z':
                // Ctrl + Z (undo)
                highlight.innerText = "ctrl + " + e.key;
                keyCode.innerText = e.keyCode + 17;
                playSound(undoSound);
                break;
            case 'c':
                // Ctrl + C (copy)
                highlight.innerText = "ctrl + " + e.key;
                keyCode.innerText = e.keyCode + 17;
                playSound(copySound);
                break;
            case 'v':
                // Ctrl + V (paste)
                highlight.innerText = "ctrl + " + e.key;
                keyCode.innerText = e.keyCode + 17;
                playSound(pasteSound);
                break;
            case 'x':
                // Ctrl + X (cut)
                highlight.innerText = "ctrl + " + e.key;
                keyCode.innerText = e.keyCode + 17;
                playSound(cutSound);
                break;
            case 's':
                // Ctrl + S (save)
                highlight.innerText = "ctrl + " + e.key;
                keyCode.innerText = e.keyCode + 17;
                playSound(saveSound);
                break;
        }
    }
})

function playSound(audioElement) {
    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
}

