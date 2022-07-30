const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;


const moveElementToEnd = (array, toMove) => {
    let i = 0;
    let j = array.length - 1;

    while (i < j) {
        while (i < j && array[j] === toMove) {
            j--;
        }
        if (array[i] === toMove) {
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
        i++;
    }

    return array;
}

console.log(moveElementToEnd(array, 2))