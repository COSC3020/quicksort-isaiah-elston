# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis


Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

### Implementation Code

```javascript
function swap(array, left, right) {
    var temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}

function qsort(array, left, right) { 
    if (left == right || left > right) {
        return;
    } else {
        let p = left;
        for (let i = (left + 1); i <= right; i++) {
            if (array[i] < array[left]) {
                swap(array, ++p, i);
            }
        }
        swap(array, left, p);
        return p;
    }
}


function quicksort(array) {
    if (array.length <= 1) {
        return array;
    } else {
        let left = 0, right = array.length - 1;
        let pivot = qsort(array, left, right); // Partition the initial array into two subarrays
        let nextRight = --pivot, nextLeft = ++pivot;
        while (nextRight > left || nextLeft < right) {
             if (pivot == left) {
                pivot = qsort(array, left++, right); // Partition the left subarray IF the minimum value is found
            } else if (pivot == right) {
                pivot = qsort(array, left, right--); // Partition the right subarray IF the maximum value is found
            } else { // Iteratively sort each subarray otherwise
                qsort(array, left, nextRight--);
                qsort(array, nextLeft++, right);
            }
        }
        return array;
    }
}
```

### Time Complexity Analysis \& Conclusion

There are three distinct functions in my quicksort implementation. 

1. The `swap` function will **always** compute in constant time regardless of the size of the input array. This is because it will only ever swap two elements of **any** given array: `swap` $ \in \mathrm{\Theta}(1)$.

2. The `qsort` function will compute in $\mathrm{\Theta}(n)$ in the worst case. This is because the only *non-constant* step in `qsort` is the `for` loop in the `else` clause of the function. In any case, the `for` loop will iterate through **some portion** of the array arbitrarily sized $n$. In the **worst** case, the `for` loop will have to swap the first element in the array with the last one (or vice versa), which means that the `for` loop will iterate through the entire array. Naturally, this conveys: `qsort` $ \in \mathrm{\Theta}(n)$ in the worst case.

3. The `quicksort` function has two non-constant components within it. The first one being the various `qsort` calls, which we know from the previous analysis to be $\mathrm{\Theta}(n)$ in the worst case. Each of the `qsort` calls are sequential with respect to each other, which means that regardless of how many times `qsort` is called, it will become a **constant** value in the leading coefficient which is asymptotically irrelevant. All of those calls are nested within a `while` loop, which will iterate through the array at most $n$ times. Thus, the `while` loop will also compute in $\mathrm{\Theta}(n)$ in the worst case.

In conclusion, we can represent a worst case time function for the `quicksort` function as follows: $n + (n * c_{1}(n)) + c_{2}$ where each $c$ term represents some arbitrary **constant**. When dropping the constant terms, we can see that the time function simplifies to: $n + (n * n) = n^2 + n$ which denote's that `quicksort` has a worst case time complexity of $\mathrm{\Theta}(n^2)$.