// **Count Occurrence of Each Character**
// Write a function that returns an object showing how many times each character appears in a string.
// Example:
// countChars("hello");
// Output: { h:1, e:1, l:2, o:1 }

function countChars(str) 
{
    let counts = {};

    for (let i = 0; i < str.length; i++) 
        {
        let char = str[i];
        if (counts[char]) 
            {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }

    return counts;
}

console.log(countChars("hello"));
