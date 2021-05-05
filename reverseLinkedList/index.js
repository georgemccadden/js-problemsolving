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
- Create a function to with a linked list's head node as the parameter
- Set a previous node variable to null
- Set a current node variable as the passed in head node
- While the current node is not null
	- Set a next node variable to current node's next
	- Update current node's next to previous
	- Update previous node variable to current node
	- Update current node to next variable
- When current node is null return the previous node variable for the reversed linked list

CODE :
*/
const reverseLinkedList = (head) => {
	let prev = null;
	let curr = head;
	while (curr) {
		let next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	return prev;
};
