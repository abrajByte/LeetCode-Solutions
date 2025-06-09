/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 /**
TLE:---
var partition = function(nums, left, right) {
    let pivot = nums[left];
    let i = left + 1;
    let j = right;

    while (i <= j) {
        while (i <= j && nums[i] <= pivot) i++; 
        while (i <= j && nums[j] > pivot) j--;  
        if (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    [nums[left], nums[j]] = [nums[j], nums[left]];  
    return j
}

var quickSelect = function(nums, left, right, targetIdx) {
    const partitionIndex =   partition(nums, left, right)
    if (targetIdx < partitionIndex) {
        return quickSelect(nums, left, partitionIndex - 1, targetIdx);
    } else if (targetIdx > partitionIndex) {
        return quickSelect(nums, partitionIndex + 1, right, targetIdx);
    } else {
        return nums[partitionIndex];
    }
};
=> other way
var quickSelect = function(nums, left, right, targetIdx){
    if (left === right) {
            return nums[left];
        }

        let pivot = nums[left];
        let low = left;
        let high = right;

        while (low <= high) {
            while (low <= high && nums[low] < pivot) {
                low++;
            }
            while (low <= high && nums[high] > pivot) {
                high--;
            }
            if (low <= high) {
                [nums[low], nums[high]] = [nums[high], nums[low]];
                low++;
                high--;
            }
        }

        if (targetIdx <= high) {
            return quickSelect(nums, left, high, targetIdx);
        } else if (targetIdx >= low) {
            return quickSelect(nums, low, right, targetIdx);
        } else {
            return nums[targetIdx];
        }
}
*/

var quickSelect = function(nums, left, right, targetIdx) {
    if (left === right) return nums[left]
    let pivotIndex = left + Math.floor(Math.random() * (right - left + 1))
    let pivot = nums[pivotIndex]
    let low = left, high = right

    while (low <= high) {
        while (nums[low] < pivot) low++
        while (nums[high] > pivot) high--
        if (low <= high) {
            [nums[low], nums[high]] = [nums[high], nums[low]]
            low++
            high--
        }
    }

    if (targetIdx <= high) {
        return quickSelect(nums, left, high, targetIdx)
    } else if (targetIdx >= low) {
        return quickSelect(nums, low, right, targetIdx)
    } else {
        return nums[targetIdx]
    }
}

var findKthLargest = function(nums, k) {
    const targetIdx = nums.length - k
    return quickSelect(nums, 0, nums.length-1, targetIdx)
}