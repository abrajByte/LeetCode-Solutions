/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    const n = nums.length
    if(n < 2){
        return 0
    }
    let maxGap = 0

    let min = Math.min(...nums)
    let max = Math.max(...nums)

    const bucketSize = Math.ceil((max-min)/(n-1))
    const minOfBucket = new Array(n-1).fill(Infinity)
    const maxOfBucket = new Array(n-1).fill(-1)

// set the min and max of bucket means put the value to the min and max bucket
    for(let i=0;i<n;i++){
        if(nums[i] === min || nums[i] === max){
            continue
        }
        const buckIndxForCurrEle = Math.floor((nums[i]-min)/bucketSize)
        minOfBucket[buckIndxForCurrEle] = Math.min(minOfBucket[buckIndxForCurrEle], nums[i])
        maxOfBucket[buckIndxForCurrEle] = Math.max(maxOfBucket[buckIndxForCurrEle], nums[i])
    }

// Now we get the diff with max of prev bucket and min of next bucket.
    for(let i=0;i<n-1;i++){
        if(maxOfBucket[i] === -1){
            continue
        }
        maxGap = Math.max(maxGap, minOfBucket[i] - min)
        min = maxOfBucket[i]
    }
    return Math.max(maxGap, max-min)
};