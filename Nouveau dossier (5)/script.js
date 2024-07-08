function dotProduct(v1, v2) {
    if (v1.length !== v2.length) {
        throw new Error("Vectors must be of the same length");
    }
    
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

// Example usage
const v1 = [1, 2, 3];
const v2 = [4, 5, 6];
const result = dotProduct(v1, v2);
console.log(`Dot product: ${result}`);
function areOrthogonal(v1, v2) {
    return dotProduct(v1, v2) === 0;
}

// Example usage for checking multiple pairs
const vectors = [
    { v1: [1, 0, 0], v2: [0, 1, 0] }, // orthogonal
    { v1: [1, 2, 3], v2: [4, 5, 6] }, // not orthogonal
    { v1: [1, -1, 0], v2: [1, 1, 0] } // orthogonal
];

for (let i = 0; i < vectors.length; i++) {
    const { v1, v2 } = vectors[i];
    const result = areOrthogonal(v1, v2);
    console.log(`Vectors ${JSON.stringify(v1)} and ${JSON.stringify(v2)} are ${result ? 'orthogonal' : 'not orthogonal'}`);
}
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage
const array = [12, 11, 13, 5, 6];
console.log(`Original array: ${array}`);
const sortedArray = insertionSort(array);
console.log(`Sorted array: ${sortedArray}`);
