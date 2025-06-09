/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length
    let m = matrix[0].length
    let low = 0
    let high = n * m - 1

    while(low <= high){
        const mid = Math.floor((low+high)/2)
        const row = Math.floor(mid / m)
        const col = mid % m
        if(matrix[row][col] == target){
            return true
        }else if(target > matrix[row][col]){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return false
};