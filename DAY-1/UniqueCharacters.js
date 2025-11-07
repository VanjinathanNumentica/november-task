// **Get Unique Characters**
// Write a function to return all Characters that appear only once in a string.
// Example:
// uniqueChars("success");
// Output: "ue"

function uniqueChars(sentence) 
{
    if (typeof sentence !== 'string' || sentence.length === 0 )
        return "Error: Empty String or Input must be string";

    let characterCounts = {};

    for (let i = 0; i < sentence.length; i++) 
        {
        let currentChar = sentence[i].toLowerCase();
        if (characterCounts[currentChar]) 
            {
            characterCounts[currentChar]++;
        } else 
            {
            characterCounts[currentChar] = 1;
        }
    }

    let uniqueCharacters = "";
    for (let i = 0; i < sentence.length; i++) 
        {
        if (characterCounts[sentence[i].toLowerCase()] === 1) 
            {
            uniqueCharacters += sentence[i];
        }
    }

    return uniqueCharacters;
}
const input = "Success";
const result = uniqueChars(input);
console.log("Output:", result);
