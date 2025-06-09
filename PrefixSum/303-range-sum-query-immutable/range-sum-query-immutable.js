/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums
    this.prefixSum = []
    
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            this.prefixSum[i] = nums[i];
        } else {
            this.prefixSum[i] = this.prefixSum[i - 1] + nums[i];
        }
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left==0) {
        return this.prefixSum[right]
    }
    return this.prefixSum[right] - this.prefixSum[left - 1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */