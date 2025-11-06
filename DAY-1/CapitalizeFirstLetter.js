// **Capitalize First Letter of Each Word**
// Write a function that capitalizes the first letter of each word in a sentence.
// Example:
// capitalizeWords("numentica ui private limited");
// Output: "Numentica Ui Private Limited"

function capitalizeWords(sentence) 
{
    if (typeof sentence !== 'string' || sentence.length === 0 )
        return "Error: Empty String or Input must be string";

    let resultText = "";
    let capitalizeNext = true;

    for (let i = 0; i < sentence.length; i++) 
        {
        let currentChar = sentence[i];
        if (currentChar === " ") 
            {
            resultText += currentChar;
            capitalizeNext = true;
            } 
            else 
                {
                if (capitalizeNext) 
                    {
                        resultText += currentChar.toUpperCase();
                        capitalizeNext = false;
                    } 
                    else 
                    {
                        resultText += currentChar.toLowerCase();
                     }
        }
    }

    return resultText;
}

const input = "numentica ui private limited";
const result = capitalizeWords(input);
console.log("Output:", result);