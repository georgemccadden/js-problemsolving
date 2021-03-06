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
- Create a function with a linked list's head node as the parameter
- Set a previous node variable to null
- Set a current node variable as the passed in head node
- While the current node is not null
	- Set a next node variable to current node's next
	- Update current node's next to previous
	- Update previous node variable to current node
	- Update current node to next variable
- When current node is null return the previous node variable for the reversed linked list

BRUTE FORCE SOLUTION :
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
/*
COMPLEXITY ANALYSIS :
Runtime complexity -> O(n) because we must traverse the entire linked list until we reach null
Space complexity -> O(1) because we are only keeping a reference to one node
*/
