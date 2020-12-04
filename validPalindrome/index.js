// Problem Domain :

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.


// Example :

// Input -> "A man, a plan, a canal: Panama"
// Output -> true

// Input -> "race a car"
// Output -> false


// Brute Force Algorithm :

// - Create pointers for the fist letter in the string and the last
// - Iterate through the string
// - Determine if the index is a valid string
// - Compare each index with each other to see if they are equal or not after changing them to the same case. If so, continue iterating, if not return false


// Code :

function validPalindrome(string) {
    let pointerOne = 0;
    let pointerTwo = string.length - 1;

    while (pointerOne < pointerTwo) {
        while (!isValidCharacter(s.charAt(pointerOne))) {
            pointerOne++;
        }
    }
}

// Runtime and Space Complexity :

