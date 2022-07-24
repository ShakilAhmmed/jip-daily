function trappingRainWaterV1(heights) {
    let totalWater = 0;
    let length = heights.length;

    for (let i = 0; i < length; i++) {
        let leftP = i;
        let rightP = i;
        let maxLeft = 0;
        let maxRight = 0;

        while (leftP >= 0) {
            maxLeft = Math.max(maxLeft, heights[leftP]);
            leftP--;
        }

        while (rightP < length) {
            maxRight = Math.max(maxRight, heights[rightP]);
            rightP++;
        }

        let currentWater = Math.min(maxRight, maxLeft) - heights[i];
        if (currentWater >= 0) {
            totalWater += currentWater;
        }
    }

    return totalWater;

}

let heights = [4, 2, 0, 3, 2, 5];

console.log(trappingRainWaterV1(heights))

function trappingRainWaterV2(height) {
    let length = height.length;
    let left = [];
    let right = [];

    left[0] = height[0];
    for (let i = 1; i < length; i++) {
        left[i] = Math.max(left[i - 1], height[i]);
    }

    right[length - 1] = height[length - 1];
    for (let j = length - 2; j >= 0; j--) {
        right[j] = Math.max(right[j + 1], height[j]);
    }

    let totalWater = 0;

    for (let counter = 0; counter < length; counter++) {
        totalWater += Math.min(left[counter], right[counter]) - height[counter];
    }

    return totalWater;
}

console.log(trappingRainWaterV2(heights))

function trappingRainWaterV3(height) {
    let left = 0;
    let right = height.length - 1;
    let maxLeft = 0;
    let maxRight = 0;
    let totalWater = 0;
    while (left < right) {
        if (height[left] <= height[right]) {
            if (height[left] >= maxLeft) {
                maxLeft = height[left]
            } else {
                totalWater += maxLeft - height[left];
            }
            left++;
        } else {
            if (height[right] >= maxRight) {
                maxRight = height[right];
            } else {
                totalWater += maxRight - height[right];
            }
            right--;
        }
    }
    return totalWater;
}

console.log(trappingRainWaterV3(heights))