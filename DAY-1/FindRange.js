// **Find Range (Max - Min) in Array**
// Write a function to return the difference between the largest and smallest numbers in an array.
// Example:
// findRange([3, 45, 12, 7, 89]);
// Output: 86

function findRange(numbers) {
    if (numbers.length === 0 || numbers.length === 1) 
        return "Error:Empty Array or Single Value";

    let largest = numbers[0];
    let smallest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }

    return largest - smallest;
}

const result = findRange([3, 45, 12, 7, 89]);
console.log("Output:", result);
