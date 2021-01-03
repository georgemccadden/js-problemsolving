/*

PROBLEM DOMAIN :

Write an algorithm to determine if a number is happy. A happy number is a number defined by the following process ->

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Those numbers for which this process ends in 1 are happy.


EXAMPLE 1 :

Input -> n = 19
Output -> true
Explanation ->
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

EXAMPLE 2 :

Input -> 2
Output -> false
Explanation ->
2^2 = 4
4^2 = 16
1^2 + 6^2 = 36
3^2 + 6^2 = 45
4^2 + 6^2 = 52
5^2 + 2^2 = 29
2^2 + 9^2 = 85
8^2 + 5^5 = 90
9^2 + 0^2 = 81
8^2 + 1^2 = 65
6^2 + 5^2 = 61... the call stack will become too long.

*/
