// **Find Range (Max - Min) in Array**
// Write a function to return the difference between the largest and smallest numbers in an array.
// Example:
// findRange([3, 45, 12, 7, 89]);
// Output: 86

function findRange(arr) {
    if (arr.length === 0) return 0;

    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return max - min;
}

const result = findRange([3, 45, 12, 7, 89]);
console.log("Range (Max - Min):", result);
