# Problem Solving using Javascript

This repository will house complex problems in the programming language of JavaScript.

## Big O (Runtime Complexity) :

* `O(1)` __Constant Time__ -> There are no loops.

* `O(log n)` __Logarithmic Time__ -> Most likely a search algorithm will have this runtime if they are sorted, such as binary search although not on hashmaps.

* `O(n)` __Linear Time__ -> For loops and while loops.

* `O(n * log(n))` __Logarithmic Linear Time__ -> Most likely sorting operations.

* `O(n^2)` __Quadratic Time__ -> Every element in a collection needs to be compared to every other element, meaning two nested loops.

* `O(2^n)` __Exponential Time__ -> Most likely recursive algorithms which solve a problem size `n`.

* `O(n!)` __Factorial Time__ -> A loop is being added for each element.


#### Remember that iterating through half of a collections still has an O(n) runtime!
#### Two separate collection iterations is -> O(n + m)!


## What Determines Runtime in a Function :

* `Operations` (+, -, *, /)
* `Comparisons` (<, >, ==)
* `Looping` (for, while)
* `Outside Function Calls` (function())


## Big O Rules to Code By :

* Rule 1 -> Always state the worst case 
* Rule 2 -> Remove constraints
* Rule 3 -> Different inputs have different variables, such as `O(n + m)` but if two collections are nested then it's `O(n * m)`
          `+` for steps in order
          `*` for nested steps
* Rule 4 -> Drop non-dominant terms

