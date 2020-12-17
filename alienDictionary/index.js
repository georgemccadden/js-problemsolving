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

var isAlienSorted = function(words, order) {
	const compareWord1AndWord2 = (firstWord, secondWord) => {
		let i = 0;
		while (firstWord[i] || secondWord[i]) {
			if (!firstWord[i]) {
				return true;
			}
			if (!secondWord[i]) {
				return false;
			}
			if (order.indexOf(firstWord[i]) === order.indexOf(secondWord[i])) {
				i++;
				continue;
			} else {
				return order.indexOf(firstWord[i]) < order.indexOf(secondWord[i]);
			}
		}
		return true;
	};

	for (let index = 0; index < words.length; index++) {
		if (!compareWord1AndWord2(words[index - 1] || '', words[index])) {
			return false;
		}
	}
	return true;
};

// ** BIG O :

// Runtime complexity ->
