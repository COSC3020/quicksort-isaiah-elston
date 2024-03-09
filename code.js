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
		let right = array.length - 1;
		let p = qsort(array, left, right);
		while (left < right) {
			p = qsort(array, left, --p);
			if (p == left) {
				++left;
			}
			p = qsort(array, ++p, right);
			if (p == right) {
				--right;
			}
		}
	}
	return array;
}