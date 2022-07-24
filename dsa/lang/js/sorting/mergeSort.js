const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(nums) {
    if (nums.length === 1) {
        return nums;
    }
    const length = nums.length;
    const middle = Math.floor(length / 2);
    const left = [...nums.slice(0, middle)];
    const right = [...nums.slice(middle)];
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return [...result, ...left, ...right];
}

console.log(mergeSort(numbers));