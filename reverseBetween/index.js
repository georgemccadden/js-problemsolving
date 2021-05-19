/*
PROBLEM DOMAIN :
Given the head of a singly linked list and two integers "m" and "n" where "m" <= "n", reverse the nodes of the list from position "m" to position "n", and return the reversed list.

TEST CASES :
head = {1, 2, 3, 4, 5}, m = 2, n = 4
                ^
- Only reversing "m" through "n" returns {1, 4, 3, 2, 5}

head = {5}, m = 1, n = 1
            ^
- There is only one node and both "m" and "n" are equal to that node so it returns {5}

head = null, m = 0; n = 0;
            ^
- Because both "m" and "n" aren't within the given parameters it returns null

BRUTE FORCE ALGORITHM :

*/
