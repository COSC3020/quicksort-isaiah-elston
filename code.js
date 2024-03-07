function swap(array, left, right) {
    var temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}

function qsort(array, left, right) { 
    if (left == right) {
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
        let left = 0, right = array.length;
        let pivot = qsort(array, left, right);
        let nextRight = --pivot, nextLeft = ++pivot;
        while (nextRight > left && nextLeft < right) {
            qsort(array, left, --nextRight);
            qsort(array, ++nextLeft, right);
        }
        return array;
    }
}