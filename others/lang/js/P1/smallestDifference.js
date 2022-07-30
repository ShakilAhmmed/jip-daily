const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17];

const smallestDifference = (arrayOne, arrayTwo) => {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    let idxOne = 0;
    let idxTwo = 0;
    let smallest = Infinity;
    let current = Infinity;
    let smallestPair = [];

    const arrayOneLength = arrayOne.length;
    const arrayTwoLength = arrayTwo.length;

    while (idxOne < arrayOneLength && idxTwo < arrayTwoLength) {
        const firstNum = arrayOne[idxOne];
        const secondNum = arrayTwo[idxTwo];
        if (firstNum < secondNum) {
            current = secondNum - firstNum;
            idxOne++;
        } else if (secondNum < firstNum) {
            current = firstNum - secondNum;
            idxTwo++;
        } else {
            return [firstNum, secondNum]
        }
        if (smallest > current) {
            smallest = current;
            smallestPair = [firstNum, secondNum];
        }
    }
    return smallestPair;
}

console.log(smallestDifference(arrayOne, arrayTwo))
