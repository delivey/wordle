function isLetter(s) {
  return s.match("^[a-zA-Z\(\)]+$") && s.length === 1;    
}

let wordsTyped = 0;
let lettersTyped = 0;
let lettersFromLastRow = 0;
let letters = []
lastEnter = true;
const currentWord = "abaft" // possibleAnswers[(Math.random() * possibleAnswers.length) | 0]

function invalidWord(word) {
    let error = document.getElementById("error")
    error.innerHTML = `${word} is not a valid word.`
}

function hideInvalidWord() {
    let error = document.getElementById("error")
    error.innerHTML = ``
}

function winningDisplay() {
    let error = document.getElementById("answer")
    error.innerHTML = `You won!`
}

function showWordScore(word) {
    const blocks = [...document.getElementsByClassName("block")];
    let start = (wordsTyped * 5)
    let end = (wordsTyped * 5) + 5 
    const newBlocks = blocks.splice(start, end)
    for (let i=0; i<newBlocks.length; ++i) {
        const block = newBlocks[i]
        const letter = block.lastChild.innerHTML.toLowerCase();

        let letterInWord = currentWord.includes(letter)

        if (letterInWord && currentWord[i] === letter) {
            block.classList.add("green")
        } else if (letterInWord) {
            block.classList.add("yellow")
        } else {
            block.classList.add("gray")
        }
    }
}

function main() {
    let answer = document.getElementById("answer")
    answer.innerHTML = currentWord;

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
                    if (lettersTyped % 5 !== 0 || lettersTyped === 0 || lastEnter || lettersFromLastRow === 0) {
                        let letterElement = document.createElement("p");
                        let letter = document.createTextNode(key);
                        letterElement.appendChild(letter)
                        block.appendChild(letterElement);
                        lettersTyped++;
                        letters.push(key)
                        lettersFromLastRow++;
                        break;
                    }
                }
            }
        }
        if (key === "Enter") {
            console.log("Entered")
            if (lettersTyped % 5 == 0) {
                let wordLetters = letters.slice((letters.length - 5), letters.length);
                let word = wordLetters.join("").toLowerCase();
                let validWord = goodAnswers.includes(word) || possibleAnswers.includes(word);
                if (!validWord) invalidWord(word);
                else {
                    showWordScore(word);
                    wordsTyped++;
                    lettersFromLastRow = 0;
                    lastEnter = true;
                    if (currentWord === word) winningDisplay()
                }
            }
        } else if (key === "Backspace") {
            if (!lastEnter) {
                hideInvalidWord();
                const blocks = document.getElementsByClassName("block");
                for (let i=blocks.length-1; i>=0; --i) {
                    const block = blocks[i]
                    if (block.lastChild && lettersFromLastRow > 0) {
                        block.removeChild(block.lastChild);
                        letters.pop()
                        lettersTyped--;
                        lettersFromLastRow--;
                        break;
                    }
                }
            }
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