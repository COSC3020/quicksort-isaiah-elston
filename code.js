function swap(array, left, right) {
	var temp = array[left];
	array[left] = array[right];
	array[right] = temp;
}

function qsort(array, left, right) {
	let currentPivotIndex = left;
	for (let parserIndex = left + 1; parserIndex <= right; parserIndex++) {
		if (array[parserIndex] < array[left]) {
			swap(array, ++currentPivotIndex, parserIndex);
		}
	}
	swap(array, left, currentPivotIndex);
	return currentPivotIndex;
}

function quicksort(array) {
	if (array.length <= 1) {
		return array;
	} else {
		let left = 0,
			right = array.length - 1;
		let pivot = qsort(array, left, right);
		let nextLeft = pivot + 1,
			nextRight = pivot - 1;
		let leftPivot = 0;
		let rightPivot = nextRight;
		while (left <= right) {
			if (nextLeft > right) {
				break;
			}
			if (leftPivot == nextRight) {
				leftPivot = qsort(array, left, nextRight--);
			} else if (rightPivot == nextLeft) {
				rightPivot = qsort(array, nextLeft++, right);
			} else if (leftPivot == left) {
				leftPivot = qsort(array, left++, nextRight);
			} else if (rightPivot == right) {
				rightPivot = qsort(array, nextLeft, right--);
			} else {
				leftPivot = qsort(array, left, nextRight);
				rightPivot = qsort(array, nextLeft, right);
			}
		}
		return array;
	}
}
