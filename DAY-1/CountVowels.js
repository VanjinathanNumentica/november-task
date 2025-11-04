// **Count Vowels in a String**
// Write a function that counts the number of vowels (a, e, i, o, u) in a given string.
// Example:
// countVowels("numentica ui solutions");
// Output: 9

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

const input = "numentica ui solutions";
const result = countVowels(input);
console.log("Count of the vowels is:", result);
