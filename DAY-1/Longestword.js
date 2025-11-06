// **Find Longest Word in a Sentence**
// Write a function to return the longest word in a given sentence.
// Example:
// findLongestWord("be kind whenever possible");
// Output: "whenever"

function findLongestWord(sentence) {

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') ||char === " ")) {
              return "Error: Input must Contain only String";
}
    }
    let longestWord = "";
    let currentWord = "";

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " ") {
            currentWord += sentence[i];
        }
        else{
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = "";
        }
    }
    if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
    }
    if (longestWord.length === 0)
        return "Error: No words found" ;

    return longestWord;
}

const input = "Be Kind Whenever possible";
const result = findLongestWord(input);
console.log("Output:", result);
