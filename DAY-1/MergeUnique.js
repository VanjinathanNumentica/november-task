// **Merge Two Arrays and Remove Duplicates**
// Write a function to merge two arrays and remove duplicate elements.
// Example:
// mergeUnique([1, 2, 3], [3, 4, 5]);
// Output: [1, 2, 3, 4, 5]

function mergeUnique(arr1, arr2) 
{
    let merged = [];

    for (let i = 0; i < arr1.length; i++) 
        {
        merged[merged.length] = arr1[i];
    }

    for (let i = 0; i < arr2.length; i++) 
        {
        let exists = false;

        for (let j = 0; j < merged.length; j++) 
            {
            if (arr2[i] === merged[j]) 
                {
                exists = true;
                break;
            }
        }

        if (!exists) {
            merged[merged.length] = arr2[i];
        }
    }

    return merged;
}

const result = mergeUnique([1, 2, 3], [3, 4, 5]);
console.log("Merged unique array:", result);
