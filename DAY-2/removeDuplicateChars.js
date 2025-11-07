// Implement a function to remove duplicate characters in a string while preserving order.

// removeDuplicateChars("programming")
// output:progamin 

function removeDuplicateChars(sentence) {
    if (typeof sentence !== 'string' || sentence.length === 0) {
        return "Error: Empty String or Input must be string";
    }

    let uniqueText = "";

    for (let index = 0; index < sentence.length; index++) {
        let currentChar = sentence[index];
        let foundDuplicate = false;

        for (let checkIndex = 0; checkIndex < uniqueText.length; checkIndex++) {
            if (uniqueText[checkIndex] === currentChar) {
                foundDuplicate = true;
                break;
            }
        }

        if (!foundDuplicate) {
            uniqueText = uniqueText + currentChar;
        }
    }

    return uniqueText;
}

const result = removeDuplicateChars("programming");
console.log("Output:", result);
