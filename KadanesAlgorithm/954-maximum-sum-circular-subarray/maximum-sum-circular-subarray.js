/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let maxSum = -Infinity
    let tmpMaxSum = 0
    let minSum = Infinity
    let tmpMinSum = 0
    let arraySum = 0

    for(let num of nums){
        arraySum += num
        if(tmpMaxSum < 0){
            tmpMaxSum = num
        }else{
            tmpMaxSum +=num
        }
        maxSum = Math.max(maxSum, tmpMaxSum)

        if(tmpMinSum > 0){
            tmpMinSum = num
        }else{
            tmpMinSum += num
        }
        minSum = Math.min(minSum, tmpMinSum)
    }

    if(arraySum === minSum){
        return maxSum
    }
    return Math.max(maxSum, arraySum - minSum)
    
};