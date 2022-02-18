function main() {
    const input = document.getElementById("input")
    console.log("input")
    input.onkeydown = function(e){
        const key = e.key
        const blocks = document.getElementsByClassName("block");
        for (let block of blocks) {
            console.log(block)
            if (!block.lastChild) {
                let letterElement = document.createElement("p");
                let letter = document.createTextNode(key);
                letterElement.appendChild(letter)
                console.log(letterElement)
                block.appendChild(letterElement);
                break;
            }
        }
    };
    
}

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        main();
    }
  }