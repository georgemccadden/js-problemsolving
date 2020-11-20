// Problem Domain :

// Given two strings 's' and 't', write a function to determine if 't' is an anagram of 's'.


// Example :

// Input -> s = "anagram", t = "nagaram"
// Output -> true


// Brute Force Algorithm :

// - Check to see if the lengths of the passed in strings are equal, if so continue. If not, return false.
// - Create hashmaps with the letters of the first and second strings by iterating through it entirely and updating the letter's count at each instance.
// - Check each letter of the second string to see if it has that same letter amount, if so, return true. If not, return false.


// Solution :

function areTheyAnagrams(string1, string2) {
    let letterBank1 = {};
    let letterBank2 = {};

    if (string1.length !== string2.length) {
        return false;
    }

    // 

}