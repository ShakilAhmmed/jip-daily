const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];



// time complexity 0(n^2)
// space complexity o(1)


function selectionSort(numbers) {
    const length = numbers.length;
    for (let i = 0; i < length; i++) {
        // set current index as minimum
        let min = i;
        let temp = numbers[i];

        for (let j = i + 1; j < length; j++) {
            if (numbers[j] < numbers[min]) {
                min = j
            }
        }
        numbers[i] = numbers[min]
        numbers[min] = temp
    }
}

selectionSort(numbers)
console.log(numbers)