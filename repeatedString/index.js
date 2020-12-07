// Problem Domain :

// There is a string `a` of lowercase English letters that is repeated infinitely many times. Given an integer `n`, find and print the number of letter a's in the first n letters of the infinite string.

// Example :

// s = `abcac` -> `abcacabcacabcacabcacabcac`...
// n = 10
// Output -> 4
// The substring you consider is `abcacabcac`, the first 10 characters of the infinite string. There are 4 occurrences of `a` in the substring.

// Algorithm :

// - The function should accept a string and a number
// - Copy and concatenate the passed in string until the length is at least `n` characters long
// - Constrain the string to the first `n` characters
// - Loop through the entire string and keep count of the letter `a`
// - Return the count
// - If there is no letter `a` return -1
