function validSequence(array, sequence) {
    let arrIdx = 0;
    let seqIdx = 0;
    let arrLength = array.length;
    let seqLength = sequence.length;
    while (arrIdx < arrLength && seqIdx < seqLength) {
        if (array[arrIdx] === sequence[seqIdx]) {
            seqIdx++;
        }
        arrIdx++;
    }

    return seqLength === seqIdx;
}

let array = [5, 4, 1, 22, 25, 6, -1, 8, 10]
let sequence = [1, 6, -1, 10]
console.log(validSequence(array, sequence))