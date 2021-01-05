# Problem Solving using Javascript

This repository will house complex problems in the programming language of JavaScript.

As a software designer it's important that I document my process for solving these problems so that I can refer back to them when I faced with complex technical issues in my work.

## What Determines Clean Code :

* Readability
* Runtime Complexity
* Space Complexity


## How I Approach Problems :

1. State the problem domain with all of the key points and details _(ex. sorted collection of integers..)_ to keep myself organized.
2. Make sure to double check: What are the inputs? What are the expected outputs?
3. Determine what is the most important constraint of the problem? Is it time, space, or is it memory? I try to keep my eye focused on the main goal.
4. Do my best not to get too bogged down by asking so many questions. They will come as I dig into the solution.
5. Approach the problem with a brute force solution in order to get my brain thinking critically but it doesn't need to be immediately written in code.
6. Explain why this approach is not the most optimal. _(ex. O(n^2) or higher..)_ 
7. Test the brute force solution by writing comments and understanding where things might break, where there's repitition, bottlenecks _(like O(n^2))_, or any other unneccessary work. It's important to use all of the information from the problem domain.
8. Before I write any code I develop a written algorithm that I follow.
9. Modularize the code at the start in order to break things up into bite-size pieces that are easy to follow and eventually test.
10. Start writing out my code while keeping in mind that the more I understand before coding the better chances I'll have at arriving at an optimal solution.
11. Think about how to check for errors and what can break my code. I never make assumptions about the expected input. I know that people are *_WAITING_* for my code to break and for me to fail but I will safeguard at all costs. I test against false inputs that I would never want.
12. Never use confusing or obscure variable names. Aim to write eloquent, clean code that reads well.
13. After it's all coded it's important to fully test my code. I check closing params, 0, undefined, null, async code, repitition, i.e.
14. I then look outside of myself to see if I can improve my code. I make sure that it works and research different approaches. I want others to find my code readable and optimal. I always strive to find the most interesting approach to a problem!
15. Success! _(Side note / I often think what a company such as Facebook or Google would want me to do if I had certain memory constraints and what would be my "divide-and-conquer" approach in order..)_


## Big O (Runtime Complexity) :

* `O(1)` _Constant Time_ -> There are no loops.

* `O(log n)` _Logarithmic Time_ -> Most likely a search algorithm will have this runtime if they are sorted, such as binary search although not on hashmaps.

* `O(n)` _Linear Time_ -> For loops and while loops.

* `O(n * log(n))` _Logarithmic Linear Time_ -> Most likely sorting operations.

* `O(n^2)` _Quadratic Time_ -> Every element in a collection needs to be compared to every other element, meaning two nested loops.

* `O(2^n)` _Exponential Time_ -> Most likely recursive algorithms which solve a problem size `n`.

* `O(n!)` _Factorial Time_ -> A loop is being added for each element.


#### Remember that iterating through half of a collections still has an O(n) runtime!
#### Two separate collection iterations is -> O(n + m)!


## What Determines Runtime in a Function :

* `Operations` (+, -, *, /)
* `Comparisons` (<, >, ==)
* `Looping` (for, while)
* `Outside Function Calls` (function())


## What Determines Space in a Function :

* `Variables`
* `Data Structures`
* `Function calls`
* `Allocations`


## Big O Rules to Code By :

* Rule 1 -> Always state the worst case 
* Rule 2 -> Remove constraints
* Rule 3 -> Different inputs have different variables, such as `O(n + m)` but if two collections are nested then it's `O(n * m)`
          `+` for steps in order
          `*` for nested steps
* Rule 4 -> Drop non-dominant terms

