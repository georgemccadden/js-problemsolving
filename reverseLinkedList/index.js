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
- Create a previous node variable to keep track of the reversal
- Create a next node variable to indicate where we are in the traversal
- While the current node is not null,
	- Update the next node variable to current node's next
	- Set previous node variable to current node
	- Set the current node (head) variable's next to null
	- Update previous node variable as current node's next
- When current node is null, return the previous node variable for the reversed linked list

CODE :
*/
