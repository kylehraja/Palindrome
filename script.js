const userInput = document.getElementById("palindromeInput");
const checkButton = document.getElementById("checkButton");
const userOutput = document.getElementById("output");

function getText() {
    let punctuation = /[\.,?!]/g;
    let word = userInput.value.replace(punctuation, "").toLowerCase().split(" ").join("");
    let reverseWord = word.split("").reverse().join("");

    if (word === "") {
        alert("Please enter a word.");
        return;
    } else if (reverseWord === word) {
        userOutput.innerText = `${word} is a palindrome.`;
    } else {
        userOutput.innerText = `${word} is not a palindrome.`;
    }
    userInput.value = "";
}

checkButton.addEventListener("click", getText);