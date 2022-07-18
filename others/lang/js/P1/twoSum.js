/**
 *
 *   Write a function that takes in a non-empty array of distinct sorted integers and an
 *   integer representing a target sum. If any two numbers in the input array sum
 *   up to the target sum, the function should return them in an array, in any
 *   order. If no two numbers sum up to the target sum, the function should return
 *   an empty array.
 *
 */


function twoNumberSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let current = numbers[left] + numbers[right];
        if (current === target) {
            return [numbers[left], numbers[right]];
        } else if (current < target) {
            left++;
        } else if (current > target) {
            right--;
        }
    }
}

let numbers = [3, 5, -4, 8, 11, 1, -1, 6]
let target = 10;

console.log(twoNumberSum(numbers, target))

// v2 if number is not sorted
function twoNumberSumV2(numbers, target) {
    let seen = {};
    for (let i = 0; i < numbers.length; i++) {
        let remaining = target - numbers[i];
        if (seen.hasOwnProperty(remaining)) {
            return [remaining, numbers[i]];
        }
        seen[numbers[i]] = i;
    }
    return [];
}
console.log(twoNumberSumV2(numbers, target))