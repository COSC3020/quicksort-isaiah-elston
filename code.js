function swap(array, left, right) {
	let temp = array[left];
	array[left] = array[right];
	array[right] = temp;
}

function qsort(array, left, right) {
	let pivot = array[right];
	let i = left - 1;
	for (let j = left; j < right; j++) {
		if (array[j] <= pivot) {
			i++;
			swap(array, i, j);
		}
	}
	swap(array, i + 1, right);
	return i + 1;
}

function quicksort(array) {
	if (array.length <= 1) {
		return array;
	} else {
	let left = 0;
	let right = array.length - 1;

	while (left < right) {
		let pivotIndex = qsort(array, left, right);


		if (pivotIndex - left < right - pivotIndex) {
			right = pivotIndex - 1;
			} else {
			left = pivotIndex + 1;
		}
	}
	return array;
	}
}