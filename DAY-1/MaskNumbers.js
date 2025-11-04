// **Replace Numbers with ‘#’**
// Write a function to replace all digits in a string with the symbol `#`.
// Example:
// maskNumbers("My pin is 1234 and code 56");
// Output: "My pin is #### and code ##"

function maskNumbers(str) 
{
    let result = "";

    for (let i = 0; i < str.length; i++) 
        {
        let char = str[i];

        if (char >= '0' && char <= '9') 
            {
            result += '#';
        } else 
            {
            result += char;
        }
    }

    return result;
}

const input = "My pin is 1234 and code 56";
const output = maskNumbers(input);
console.log("Masked string:", output);
