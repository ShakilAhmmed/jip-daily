/**
 * Brute Force
 * time complexity O(n^2)
 */
const heights = [4, 8, 1, 2, 3, 9]

function containerWithMostWater(heights) {
    let maxArea = 0;
    let length = heights.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            let h = Math.min(heights[i], heights[j]);
            let w = j - i;
            let area = h * w;
            maxArea = Math.max(area, maxArea)
        }
    }
    return maxArea;
}

function containerWithMostWaterV2(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxArea = 0;

    while (left < right) {
        let height = Math.min(heights[left], heights[right]);
        let width = right - left;
        let area = height * width;
        maxArea = Math.max(area, maxArea);
        if (heights[left] <= heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}


console.log(containerWithMostWater(heights))
console.log(containerWithMostWaterV2(heights))


