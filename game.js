function isLetter(s) {
  return s.match("^[a-zA-Z\(\)]+$") && s.length === 1;    
}

let lettersTyped = 0;
lastEnter = true;

function main() {
    const input = document.getElementById("input")
    console.log("input")
    input.onkeydown = function(e){
        let key = e.key
        if (isLetter(key)) {
            key = key.toUpperCase();
            const blocks = document.getElementsByClassName("block");
            for (let i=0; i<blocks.length; ++i) {
                const block = blocks[i]
                console.log(block)
                if (!block.lastChild) {
                    if (lettersTyped % 5 !== 0 || lettersTyped === 0 || lastEnter) {
                        let letterElement = document.createElement("p");
                        let letter = document.createTextNode(key);
                        letterElement.appendChild(letter)
                        block.appendChild(letterElement);
                        lettersTyped++;
                        break;
                    }
                }
            }
        }
        if (key === "Enter") {
            console.log("Entered")
            lastEnter = true;
        } else {
            lastEnter = false;
        }
    };
    
}

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        main();
    }
  }