function firstNonRepeatedChar(str) {
    // Object to store character counts
    let count = {};

    // Count each character in the string
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    // Find the first character with count 1
    for (let char of str) {
        if (count[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character found
    return null;
}

// Test with prompt
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));