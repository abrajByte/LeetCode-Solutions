/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length
    // transpose
    for(let i=0; i<n-1;i++){
        for(let j=i+1;j<n;j++){
            const tmp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = tmp
        }
    }
    // reverse each row
    for(let i=0; i<n;i++){
        matrix[i].reverse()
    }
};