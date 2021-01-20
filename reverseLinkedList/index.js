/*

PROBLEM DOMAIN :

Reverse a singly linked list both iteratively and recursively.


EXAMPLE :

Input -> 1 -> 2 -> 3 -> 4 -> 5 -> NULL
Output -> 5 -> 4 -> 3 -> 2 -> 1 -> NULL


ALGORITHM :

(Iterative)
- Create variables to keep track of the current node, a previous value, and a next value.
- Iterate through the linked list until you've reached a node with the value of null.
- Store the linked list's head node's next value.
- Update the current node's next value to null.
- Update the previous node value which was null to the current node's next value.
- Update the current node's value to the next node in the linked list which was saved.
- Return the linked list at the end of the iteration.


SOLUTIONS :

(Iterative)
*/

const reverseLinkedListIteratively = (head) => {
	let curr = head;
	let next = null;
	let prev = null;

	while (curr) {
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	return prev;
};

/*
(Recursive)
*/
