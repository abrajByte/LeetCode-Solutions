/**
 * @param {number[]} nums
 * @return {number}
 */
var merge = function(nums,l, mid, h){
    const arr = []
    let left = l
    let right = mid+1
    while(left <= mid && right <= h){
        if(nums[left] < nums[right]){
            arr.push(nums[left])
            left++
        }else{
            arr.push(nums[right])
            right++
        }
    }
    
    while(left <= mid){
        arr.push(nums[left])
            left++
    }
    while(right <= h){
        arr.push(nums[right])
        right++
    }
    
    for(let i=l;i<= h;i++){
        nums[i] = arr[i-l]
    }
    return nums
}

var countPairs = function(nums, l, mid, h){
    let right = mid+1
    let count = 0
    for(let i=l;i<=mid;i++){
        while(right <= h && nums[i] > 2*nums[right]){
            right++
        }
        count += (right-(mid+1))
    }
    return count
}

var mergeSort = function(nums, l, h){
    count = 0
    if(l >= h){
        return count
    }
    const mid = Math.floor((l+h)/2)
    count += mergeSort(nums,l, mid)
    count += mergeSort(nums,mid+1, h)
    count += countPairs(nums, l, mid, h)
    merge(nums, l, mid, h)
    return count
}

var reversePairs = function(nums) {
    return mergeSort(nums,0, nums.length-1)
};