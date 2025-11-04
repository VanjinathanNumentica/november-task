// **Capitalize First Letter of Each Word**
// Write a function that capitalizes the first letter of each word in a sentence.
// Example:
// capitalizeWords("numentica ui private limited");
// Output: "Numentica Ui Private Limited"

function capitalizeWords(input) 
{
    let result = "";
    let capitalizeNext = true;

    for (let i = 0; i < input.length; i++) 
        {
        let char = input[i];
        if (char === " ") 
            {
            result += char;
            capitalizeNext = true;
            } 
            else 
                {
                if (capitalizeNext) 
                    {
                        result += char.toUpperCase();
                        capitalizeNext = false;
                    } 
                    else 
                    {
                        result += char.toLowerCase();
                     }
        }
    }

    return result;
}

const input = "numentica ui private limited";
const output = capitalizeWords(input);
console.log("Capitalized words:", output);