// ** PROBLEM DOMAIN :

// In an alien language, surprisinglythey also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Determine if the words and the particular order in which they are given are sorted lexicographicaly in this alien language. These are the constraints ->
// - This function will receive a sequence of words and the order of the alphabet
// - You must return `true` if the words are sorted lexicographicaly

// ** EXAMPLE 1 :

// Input -> words = [`hello`, `leetcode`], order = `hlabcdefgijkmnopqrstuvwxyz`
// Output -> true
// Explanation -> As `h` comes before `l` in this language, then the sequence is sorted.

// ** EXAMPLE 2 :

// Input -> words = [`word`, `world`, `row`], order = `worldabcefghijkmnpqstuvxyz`
// Output -> false
// Explanation -> As `d` comes after `l` in this language, then words[0] > words[1], hence the sequence is unsorted.

// ** BRUTE FORCE ALGORITHM :

// - Create a hashmap of the words and assign its value the position it is in the order parameter
// - Compare each letter of each of the words and if any of the letters of the following words are less than that of the first then you will know if it is in lexicographical order
// - Return false if it is not in order, return true if you have reached the end of the length of the words

// ** OPTIMAL SOLUTION :

const isAlienSorted = (words, order) => {
	const hashMap = new Map();

	// Creating key/value pairs of the order to create a hierarchy -> O(26) or O(1)
	for (let i = 0; i < order.length; i++) {
		hashMap.set(order[i], i);
	}

	// Creating a method that compares the words in the first parameters
	const compareWords = (firstWord, secondWord) => {
		let i = 0;
		let j = 0;

		// I must compare each letter in the words with one another to determine if the order is lexicogorical or not -> O(n)
		while (i < firstWord.length && j < secondWord.length) {}
	};
};
