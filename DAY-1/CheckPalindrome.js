// **Check Palindrome**
// Write a function to check if a string is a palindrome (reads the same backward).
// Example:
// isPalindrome("madam"); // true
// isPalindrome("hello"); // false

function isPalindrome(str) 
{
    let lowerStr = "";
    for (let i = 0; i < str.length; i++) 
        {
        let char = str[i];
        if (char !== " ") 
            {
            lowerStr += char.toLowerCase();
         }
    }

    let start = 0;
    let end = lowerStr.length - 1;

    while (start < end) 
        {
        if (lowerStr[start] !== lowerStr[end]) 
            {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
