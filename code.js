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
        let left = 0;
        let right = array.length;
        while (left < right) {
            let p = qsort(array, left, right);
                if (p == left) {
                p = qsort(array, ++left, right);
            } else if (p == right) {
                p = qsort(array, left, --right);
            } else {
                qsort(array, left, --p);
                qsort(array, ++p, right);
            }
        }
    }
    return array;
}