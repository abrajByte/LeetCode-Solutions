/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// var quickSelect = function(nums, l, r, k){
//     if (l === r) return nums[l]

//     const pivotIndex = l + Math.floor(Math.random() * (r - l + 1))
//     // [nums[pivotIndex], nums[r]] = [nums[r], nums[pivotIndex]]
//     const pivot = nums[r]
//     let j = l
//     for(let i=l;i<r;i++){
//         if(nums[i] <= pivot){
//             [nums[j], nums[i]] = [nums[i], nums[j]]
//             j++
//         }
        
//     }
//     [nums[j], nums[r]] = [nums[r], nums[j]]

//     if(j > k){
//         return quickSelect(nums, l, j-1, k)
//     }else if(j < k){
//         return quickSelect(nums, j+1, r, k)
//     }else{
//         return nums[j]
//     }
// }
var findKthLargest = function(nums, k) {
    const quickSelect = (nums, left, right, targetIdx) => {
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
    };

    const targetIdx = nums.length - k;
    return quickSelect(nums, 0, nums.length - 1, targetIdx);  
};