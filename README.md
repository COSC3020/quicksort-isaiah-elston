[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)
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
	let p = left;
	for (let i = left + 1; i <= right; i++) {
		if (array[i] < array[left]) {
			swap(array, ++p, i);
		}
	}
	swap(array, left, p);
	return p;
}

function quicksort(array) {
	if (array.length <= 1) {
		return array;
	} else {
		let left = 0;
		let p = qsort(array, left, right); // Θ(n)
		let right = array.length - 1;
		while (left < right) { // Θ(n)
			p = qsort(array, left, --p); // Θ(n)
			if (p == left) {
				++left;
			}
			p = qsort(array, ++p, right); // Θ(n)
			if (p == right) {
				--right;
			}
		}
	}
	return array;
}
```

### Time Complexity Analysis \& Conclusion

There are three distinct functions in my quicksort implementation. 

1. The `swap` function will **always** compute in constant time regardless of the size of the input array. This is because it will only ever swap two elements of **any** given array: `swap` $\in \mathrm{\Theta}(1)$ in **any** case.

2. The `qsort` function will compute in $\mathrm{\Theta}(n)$ in the worst case. This is because the only *non-constant* step in `qsort` is the `for` loop in the `else` clause of the function. In **any** case, the `for` loop will iterate through **some portion** of the array arbitrarily sized $n$. In the **worst** case, the `for` loop will have to swap the first element in the array with the last one (or vice versa), which means that the `for` loop will iterate through the entire array. Naturally, this conveys: `qsort` $\in \mathrm{\Theta}(n)$ in the worst case.

3. The `quicksort` function has two non-constant components within it. The first one being the three `qsort` calls, which we know from the previous analysis that `qsort` $\in \mathrm{\Theta}(n)$ in the worst case. The second *non-constant* portion of the `quicksort` function is the `while` loop. The `while` loop essentially checks to see if the indices of the partitioned "sub-arrays" have met in the middle. In the worst case, the left and right "sub-arrays" will each have to be sorted in their entirety. Therefore, the `while` loop would effectively iterate through the length of the **original** array via the repeatedly smaller "sub-arrays" and be $\in \mathrm{\Theta}(n)$ in the worst case. 

In conclusion, we can represent a worst case time function for the `quicksort` function as follows: $n + (n * c_{1}(n)) + c_{2}$ where each $c$ term represents some arbitrary **constant**. When dropping the constant terms, we can see that the time function simplifies to: $n + (n * n) = n^2 + n$ which denote's that `quicksort` has a worst case time complexity of $\mathrm{\Theta}(n^2)$.