/**
 *
 *   Write a function that takes in a non-empty array of integers that are sorted
 *   in ascending order and returns a new array of the same length with the squares
 *   of the original integers also sorted in ascending order.
 */

const nums = [1, 4, 9, 25, 36, 64, 81];

// First Approach
function sortedSquaredArray(nums) {
    let arrIdx = 0;
    for (let value of nums) {
        nums[arrIdx] = value * value;
        arrIdx++;
    }

    nums.sort((a, b) => a - b);

    return nums;
}

console.log(sortedSquaredArray(nums));

function sortedSquaredArrayV2(nums) {
    let sorted = new Array(nums.length).fill(0);
    let left = 0;
    let right = nums.length - 1;
    let idx = nums.length - 1;

    while (left <= right) {
        const small = nums[left];
        const large = nums[right];
        if (Math.abs(small) > Math.abs(right)) {
            sorted[idx--] = small * small;
            left++;
        } else {
            sorted[idx--] = large * large;
            right--;
        }
    }

    return sorted;

}
const nums2 = [1, 4, 9, 25, 36, 64, 81];
console.log(sortedSquaredArrayV2(nums2));
