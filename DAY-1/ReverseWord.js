// **Reverse Words in a Sentence**
// Write a JavaScript function to reverse the order of words in a sentence.
// Example:
// reverseWords("hello world from javascript");
// Output: "javascript from world hello"

function reverseWords(sentence) {
    let word = "";
    let wordsArray = [];

    for (let i = 0; i <= sentence.length; i++) {
        let char = sentence[i];

        if (char === " " || char === undefined) {
            if (word.length > 0) {
                wordsArray[wordsArray.length] = word;
                word = "";
            }
        } else {
            word += char;
        }
    }

    let reversedSentence = "";
    for (let i = wordsArray.length - 1; i >= 0; i--) {
        reversedSentence += wordsArray[i];
        if (i !== 0) {
            reversedSentence += " ";
        }
    }

    return reversedSentence;
}

const input = "hello world from javascript";
const output = reverseWords(input);
console.log("Reversed words:", output);
