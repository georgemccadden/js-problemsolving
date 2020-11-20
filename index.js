// Problem Domain :

// Given two strings 's' and 't', write a function to determine if 't' is an anagram of 's'.


// Example :

// Input -> s = "anagram", t = "nagaram"
// Output -> true


// Brute Force Algorithm :

// - Check to see if the lengths of the passed in strings are equal, if so continue. If not, return false.
// - Create a hashmap with the letters of the first string by iterating through it entirely and updating the letter's count at each instance.
// - Check each letter of the second string to see if it that letter is present in the hashmap that, if so, return decrement it. If not, return false.


// Solution :

function areTheyAnagrams(string1, string2) {
    let letterBank = {};

    if (string1.length !== string2.length) {
        return false;
    }

    // Create the hashmap for the first string



}