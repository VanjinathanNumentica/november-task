// **Check Palindrome**
// Write a function to check if a string is a palindrome (reads the same backward).
// Example:
// isPalindrome("madam"); // true
// isPalindrome("hello"); // false

function isPalindrome(sentence) 
{
        if (typeof sentence !== 'string' || sentence.length === 0 )
        return "Error: Empty String or Input must be string";

    let cleanedText = "";
    for (let i = 0; i < sentence.length; i++) 
        {
        let currentChar = sentence[i];
        if (currentChar !== " ") 
            {
            cleanedText += currentChar.toLowerCase();
         }
    }

    let startIndex = 0;
    let endIndex = cleanedText.length - 1;

    while (startIndex < endIndex) 
        {
        if (cleanedText[startIndex] !== cleanedText[endIndex]) 
            {
            return false;
        }
        startIndex++;
        endIndex--;
    }

    return true;
}

console.log(isPalindrome("Madam"));
console.log(isPalindrome("hello"));
