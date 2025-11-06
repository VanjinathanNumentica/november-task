// **Reverse Words in a Sentence**
// Write a JavaScript function to reverse the order of words in a sentence.
// Example:
// reverseWords("hello world from javascript");
// Output: "javascript from world hello"

function reverseWords(sentence) {
        if (typeof sentence !== 'string' || sentence.length === 0 )
            return "Error: Empty String or Input must be string";   
   
    let word = "";
    let wordsArray = [];

    for (let i = 0; i <= sentence.length; i++) {
        let currentChar = sentence[i];

         if(currentChar >= '0' && currentChar <= '9'){
        return "Error: Input must be contains only String";
    }

        if (currentChar === " " || i === sentence.length) {
            if (word.length > 0) {
                wordsArray[wordsArray.length] = word;
                word = "";
            }
        } else {
            word += currentChar;
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
const result = reverseWords(input);
console.log("Output:", result);
