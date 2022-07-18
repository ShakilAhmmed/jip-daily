const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


// time complexity 0(n^2)
// space complexity o(1)


function bubbleSort(numbers) {
    const length = numbers.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
}
bubbleSort(numbers)
console.log(numbers)