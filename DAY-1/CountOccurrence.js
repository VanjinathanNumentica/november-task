// **Count Occurrence of Each Character**
// Write a function that returns an object showing how many times each character appears in a string.
// Example:
// countChars("hello");
// Output: { h:1, e:1, l:2, o:1 }

function countChars(sentence) 
{
    if (typeof sentence !== 'string' || sentence.length === 0 )
        return "Error: Empty String or Input must be string";

    let characterCounts = {};

    for (let i = 0; i < sentence.length; i++) 
        {
        let lowerChar = sentence[i].toLowerCase();
        if (characterCounts[lowerChar]) 
            {
            characterCounts[lowerChar]++;
        } else {
            characterCounts[lowerChar] = 1;
        }
    }

    return characterCounts;
}

const input = "Hello";
const result = countChars(input);
console.log("Output:", result);