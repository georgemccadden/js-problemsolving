/*

PROBLEM DOMAIN :

Given two binary strings `a` and `b`, return their sum as a binary string.

(note / The input strings are both non-empty and contain only characters 1 or 0)


EXAMPLE 1 :

Input -> a = `11`, b = `1`
Output -> `100`

Example 2 :

Input -> a = `1010`, b = `1011`
Output -> `10101`


BRUTE FORCE SOLUTION :
*/
const addBinary = (a, b) => (parseInt(a, 2) + parseInt(b, 2)).toString(2);
