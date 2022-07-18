/**
 *
 *
 *   A subsequence of an array is a set of numbers that aren't necessarily adjacent
 *   in the array but that are in the same order as they appear in the array. For
 *   instance, the numbers [1, 3, 4]  form a subsequence of the array [1, 2, 3, 4] , and so do the numbers [2, 4]
 *   . Note that a single number in an array and the array itself are both valid
 *   subsequences of the array.
 */



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