// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// An array of integers containing at least two elements.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// -1000 ≤ inputArray[i] ≤ 1000.

// [output] integer

// The largest product of adjacent elements.

function adjacentElementsProduct(inputArray) {    
    
    let product;
    let largestProduct = inputArray[0] * inputArray[1];
    
    for (let i = 0; i < inputArray.length; i++) {
        
        let a = inputArray[i];
        let b = inputArray[i-1];
        product = a * b;
        if (product > largestProduct) {
            largestProduct = product;
        }
    }
    
    return largestProduct;
}
