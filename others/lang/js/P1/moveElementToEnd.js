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

const moveElementToEnd2 = (nums, toMove) => {
    let tmp = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== toMove) {
            let temp = array[i];
            array[i] = array[tmp];
            array[tmp] = temp;
            tmp++;
        }
    }

    return nums;
}

// console.log(moveElementToEnd(array, toMove))
console.log(moveElementToEnd2(array, toMove))