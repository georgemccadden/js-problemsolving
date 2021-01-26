/*

PROBLEM DOMAIN :

An array is monotonic if it is either monotone increasing or monotone decreasing. An array A is monotone increasing if for all i <= j, A[i] <= A[j]. An array A is monotone decreasing if for all i <= j, A[i] >= A[j]. Return true if and only if the given array A is monotonic.


EXAMPLE 1 :

Input -> [1, 2, 2, 3]
Output -> true


EXAMPLE 2 :

Input -> [6, 5, 4, 4]
Output -> true


EXAMPLE 3 :

Input -> [1, 3, 2]
Output -> false


EXAMPLE 4 :

Input -> [1, 2, 4, 5]
Output -> true


EXAMPLE 5 :

Input -> [1, 1, 1]
Output -> true


ALGORITHM :

- Keep a tally of how many elements are incrementing or decrementing.
- Iterate through the entire array.
- After you've reached end of the array, if either of the tallies equal the array's length then return `true`.
- If neither of the tallies equal the length of the array, return `false`.


*/
