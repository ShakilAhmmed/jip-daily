const nums = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];

const isMonotonic = (array) => {
    let nonIncreasing = true;
    let nonDecreasing = true;
    const length = array.length;
    for (let i = 1; i < length; i++) {
        if (array[i] < array[i - 1]) {
            nonDecreasing = false;
        }

        if (array[i] > array[i - 1]) {
            nonIncreasing = false;
        }
    }
    return nonIncreasing || nonDecreasing;
}

console.log(isMonotonic(nums));