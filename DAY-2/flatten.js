// Flatten a nested array into a single array (only one level).

// flatten([1, [2, 3], [4, 5]])

function flatten(nestedArray) {
    if (!nestedArray || typeof nestedArray.length !== 'number') {
        return "Error: Invalid input";
    }

    let flattenedArray = [];
    for (let index = 0; index < nestedArray.length; index++) {
        let item = nestedArray[index];

        if (item && typeof item.length === 'number' && typeof item !== 'string') {
            for (let checkIndex = 0; checkIndex < item.length; checkIndex++) {
                flattenedArray[flattenedArray.length] = item[checkIndex];
            }
        } else {
            flattenedArray[flattenedArray.length] = item;
        }
    }

    return flattenedArray;
}
const result = flatten([1, [2, 3], [4, 5]]);
console.log("Output:", result);