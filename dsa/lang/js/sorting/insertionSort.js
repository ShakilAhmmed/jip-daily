const numbers = [5, 2, 4, 6, 1, 3];

function insertionSort(numbers) {
    let length = numbers.length;
    for (let i = 1; i < length; i++) {
        let current = numbers[i];
        let j = i - 1;
        while (j >= 0 && current < numbers[j]) {
            numbers[j + 1] = numbers[j];
            j--;
        }
        numbers[j + 1] = current;
    }
}

insertionSort(numbers)
console.log(numbers)