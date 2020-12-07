// Problem Domain :

// There is a string `a` of lowercase English letters that is repeated infinitely many times. Given an integer `n`, find and print the number of letter a's in the first n letters of the infinite string.

// Example :

// s = `abcac` -> `abcacabcacabcacabcacabcac`...
// n = 10
// Output -> 4
// The substring you consider is `abcacabcac`, the first 10 characters of the infinite string. There are 4 occurrences of `a` in the substring.

// Algorithm :

// - Create a variable for the substring
// - Determine how many a's are in a valid substring
// - Determine the remainder
// - Look for any a's in the remainder
// - If there is no remainder with the `n` and the string then return the a's of that substring, if there is, add the the remainder of a's

// Code :

function repeatedString(s, n) {
	const subString = Math.floor(n / s.length);
	const subStringOfAs = (s.match(/a/g) || []).length;
	const remainder = n % s.length;
	const remainderOfAs = s.split('').slice(0, remainder).filter((letter) => letter === `a`).length;

	// If the length of the string is divisible by `n` with no remainder then there's no need to take care of remainders
	return n % s.length === 0 ? n / s.length * subStringOfAs : subString * subStringOfAs + remainderOfAs;
}

// Big O :

// Runtime Complexity -> O(n)
// Space Complexity -> O(1)
