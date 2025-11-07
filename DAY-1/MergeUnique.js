// **Merge Two Arrays and Remove Duplicates**
// Write a function to merge two arrays and remove duplicate elements.
// Example:
// mergeUnique([1, 2, 3], [3, 4, 5]);
// Output: [1, 2, 3, 4, 5]

function mergeUnique(firstArray, secondArray) 
{
    if (!Array.isArray(firstArray) || !Array.isArray(secondArray) ||
         (firstArray.length === 0 || secondArray.length === 0)) {
        return "Error: Empty Array or Both inputs must be Array";
    }
    let mergedSet = [];

    for (let i = 0; i < firstArray.length; i++) 
        {
        mergedSet[mergedSet.length] = firstArray[i];
    }

    for (let i = 0; i < secondArray.length; i++) 
        {
        let exists = false;

        for (let j = 0; j < mergedSet.length; j++) 
            {
            if (secondArray[i] === mergedSet[j]) 
                {
                exists = true;
                break;
            }
        }

        if (!exists) {
            mergedSet[mergedSet.length] = secondArray[i];
        }
    }

    return mergedSet;
}

const result = mergeUnique([1, 2, 3], [3, 4, 5]);
console.log("Output:", result);
