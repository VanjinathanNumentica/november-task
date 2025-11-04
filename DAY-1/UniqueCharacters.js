// **Get Unique Characters**
// Write a function to return all characters that appear only once in a string.
// Example:
// uniqueChars("success");
// Output: "ue"

function uniqueChars(str) 
{
    let count = {};

    for (let i = 0; i < str.length; i++) 
        {
        let char = str[i];
        if (count[char]) 
            {
            count[char]++;
        } else 
            {
            count[char] = 1;
        }
    }

    let unique = "";
    for (let i = 0; i < str.length; i++) 
        {
        if (count[str[i]] === 1) 
            {
            unique += str[i];
        }
    }

    return unique;
}

console.log(uniqueChars("success"));
