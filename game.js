function isLetter(s) {
  return s.match("^[a-zA-Z\(\)]+$") && s.length === 1;    
}

var lastRowAccepted = -1;

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
                    console.log(lastRowAccepted)
                    if (i < 5 || lastRowAccepted > 0) {
                        let letterElement = document.createElement("p");
                        let letter = document.createTextNode(key);
                        letterElement.appendChild(letter)
                        block.appendChild(letterElement);
                        if (i > 5) lastRowAccepted++;
                        if (lastRowAccepted === 5) lastRowAccepted = -1;
                        break;
                    }
                }
            }
        }
        if (key === "Enter") {
            console.log("Entered")
            lastRowAccepted = 1;
        }
    };
    
}

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        main();
    }
  }