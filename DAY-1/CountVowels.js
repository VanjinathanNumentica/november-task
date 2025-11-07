// **Count Vowels in a String**
// Write a function that counts the number of vowels (a, e, i, o, u) in a given string.
// Example:
// countVowels("numentica ui solutions");
// Output: 9

function countVowels(sentence) {
  if (typeof sentence !== 'string' || sentence.length === 0 )
        return "Error: Empty String or Input must be string";
  
  let lowerSentence = sentence.toLowerCase()
  let vowelsCount = 0;

  for (let i = 0; i < lowerSentence.length; i++) 
    {
    let char = lowerSentence[i];
      if ( char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
    {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

const input = "numentica ui solutions";
const result = countVowels(input);
console.log("Output:", result);
