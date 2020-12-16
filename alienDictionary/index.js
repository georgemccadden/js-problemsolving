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