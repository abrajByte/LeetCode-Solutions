/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length < 3){
        return 0
    }
    let left = 1
    let right = height.length-2
    let maxLeft = height[0]
    let maxRight = height[height.length-1]
    let trapWater = 0
    
    while(left <= right){
        if(maxLeft < maxRight){
            if(height[left] >= maxLeft){
                maxLeft = height[left] 
            }else{
               trapWater += maxLeft - height[left]
            }
            left++
        }else{
            if(height[right] > maxRight){
                maxRight = height[right]
            }else{
                 trapWater += maxRight - height[right]
            }
            right--
        }
        
    }
    return trapWater
};