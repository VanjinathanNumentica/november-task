// **Replace Numbers with ‘#’**
// Write a function to replace all digits in a string with the symbol `#`.
// Example:
// maskNumbers("My pin is 1234 and code 56");
// Output: "My pin is #### and code ##"

function maskNumbers(sentence) {
    if (typeof sentence !== 'string' || sentence.length === 0 )
        return "Error: Empty String or Input must be string";

    let currentSymbol = "";

    for (let i = 0; i < sentence.length; i++) 
        {
        let Currentchar = sentence[i];

        if (Currentchar >= '0' && Currentchar <= '9') 
            {
            currentSymbol += '#';
        } else 
            {
            currentSymbol += Currentchar;
        }
    }

    return currentSymbol;
}

const input = "My pin is 1234 and code 56";
const result = maskNumbers(input);
console.log("Output:", result);