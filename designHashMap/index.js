/* PROBLEM DOMAIN :

Design a HashMap without using any built-in hash table libraries. Your design should include the following functions ->

- `put(key, value)` : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.

- `get(key)` : Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.

- `remove(key)` : Remove the mapping for the value key if this map contains the mapping for the key.


EXAMPLE :

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1); returns 1
hashMap.get(3); returns -1 because it's not found
hashMap.put(2, 1); updates existing value
hashMap.get(2); returns 1
hashMap.remove(2); removes the mapping for 2
hashMap.get(2); returns -1 because it's not found

console.log(hashMap) ->

hashMap {
    1 : 1
}


ALGORITHM :


*/
