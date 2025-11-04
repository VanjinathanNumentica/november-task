// **Find Longest Word in a Sentence**
// Write a function to return the longest word in a given sentence.
// Example:
// findLongestWord("be kind whenever possible");
// Output: "whenever"

function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

const input = "be kind whenever possible";
const result = findLongestWord(input);
console.log("Longest word:", result);
