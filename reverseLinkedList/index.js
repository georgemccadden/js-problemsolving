/*
PROBLEM DOMAIN :
Given a linked list, return it in reverse.

TEST CASES :
null
 ^
- Since the input is null it should return null.

6
^
- Since the input is just a single node it should return that node.

1 -> 2 -> 3 -> 4 -> 5 -> null
			^

- The output should be 5 -> 4 -> 3 -> 2 -> 1 -> null


BRUTE FORCE ALGORITHM :
- Start from the root node
- Create a current node variable for iteration
- While the current node is not null, set the current node to the next node.
- 
*/
