// Find the second largest number in an array.

// findSecondLargest([10, 5, 20, 8])
// Output: 10

function findSecondLargest(numberArray) {
    if (!numberArray || typeof numberArray.length !== 'number' || numberArray.length < 2) {
        return "Error: Empty Array or Array must have at least 2 elements";
    }

    let largest = null;
    let secondLargest = null;

    for (let i = 0; i < numberArray.length; i++) {
        let currentNumber = numberArray[i];

        if (typeof currentNumber === 'number') 

        if (largest === null || currentNumber > largest) {
            secondLargest = largest;
            largest = currentNumber;
        } 
        else if ((secondLargest === null || currentNumber > secondLargest) && currentNumber < largest) 
            {
            secondLargest = currentNumber;
        }
    }

    if (secondLargest === null) {
        return "Error: Same Number Found";
    }

    return secondLargest;
}

const input = [10, 5, 20, 8];
const result = findSecondLargest(input);
console.log("Output:", result); // Output: 10
