function isLetter(s) {
  return s.match("^[a-zA-Z\(\)]+$") && s.length === 1;    
}

function main() {
    const input = document.getElementById("input")
    console.log("input")
    input.onkeydown = function(e){
        const key = e.key.toUpperCase();
        if (isLetter(key)) {
            const blocks = document.getElementsByClassName("block");
            for (let block of blocks) {
                if (!block.lastChild) {
                    let letterElement = document.createElement("p");
                    let letter = document.createTextNode(key);
                    letterElement.appendChild(letter)
                    block.appendChild(letterElement);
                    break;
                }
            }
        }
    };
    
}

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        main();
    }
  }