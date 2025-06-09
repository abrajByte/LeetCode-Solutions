/**
 * @param {number} n
 * @return {string[][]}
 */
var isSafe = function(row, col, board, n) {
    const dupRow = row
    const dupCol = col

    while(row >= 0 && col >= 0){
        if(board[row][col] === 'Q'){
            return false
        }
        row--
        col--
    }

    col = dupCol
    row = dupRow
    while(col >= 0){
        if(board[row][col] === 'Q'){
            return false
        }
        col--
    }

    col = dupCol
    row = dupRow
    while(row < n && col >= 0){
        if(board[row][col] === 'Q'){
            return false
        }
        row++
        col--
    }
    return true
}

// const backTrack = function(col, board, res, n, leftRow, upperDiagonal, lowerDiagonal){
//         if(col === n){
//             res.push(board.map(row => row.join('')));
//             return
//         }
//         for(let row = 0; row < n; row++){
//             // isSafe(row, col, board, n))
//             const isSafe = leftRow[row] == 0 && lowerDiagonal[row+col] == 0 && upperDiagonal[n-1 + col-row] == 0
//             if(isSafe){
//                 board[row][col] = 'Q'
//                 leftRow[row] = 1
//                 lowerDiagonal[row+col] = 1
//                 upperDiagonal[n-1 + col-row] = 1
//                 backTrack(col+1, board, res, n, leftRow, upperDiagonal, lowerDiagonal);
//                 board[row][col] = "."
//                 leftRow[row] = 0
//                 lowerDiagonal[row+col] = 0
//                 upperDiagonal[n-1 + col-row] = 0
//             }
//         }
//     }

/*
to get avaiable next avaiable row in O(1):
let rowMask = ~(leftRow | lowerDiagonal | upperDiagonal) & ((1 << n) - 1)
        
        while (rowMask) {
        const lowBit = rowMask & -rowMask
        const row = Math.log2(lowBit) // convert leftmost set bit pos to index
        board[row][col] = 'Q'
        backTrack(
            col + 1,
            board,
            res,
            n,
            leftRow | lowBit,
            (lowerDiagonal | lowBit) << 1,
            (upperDiagonal | lowBit) >> 1
        );
        board[row][col] = '.';
        // Remove the current bit (move to the next available position)
        rowMask ^= lowBit;
*/

// nistead of array used bit manuplation
// const backTrack = function(col, board, res, n, leftRow=0, upperDiagonal=0, lowerDiagonal=0){
//         if(col === n){
//             res.push(board.map(row => row.join('')));
//             return
//         }
//         for(let row = 0; row < n; row++){
//         const isLeftSafe = (leftRow & (1 << row)) === 0 
//         const isLowerSafe = (lowerDiagonal & (1 << (row + col))) === 0
// const isUpperSafe = (upperDiagonal & (1 << ((n - 1) + (col - row)))) === 0;
//     const isSafe = isLeftSafe && isLowerSafe && isUpperSafe
//             if(isSafe){
//                 board[row][col] = 'Q'
//                 leftRow |= 1 << row
//                 lowerDiagonal |= 1 << row+col
//                 upperDiagonal |= 1 << (n-1 + col-row)
//                 backTrack(col+1, board, res, n, leftRow, upperDiagonal, lowerDiagonal);
//                 board[row][col] = "."
//                 leftRow ^= 1 << row
//                 lowerDiagonal ^= 1 << (row+col)
//                 upperDiagonal ^= 1 << ((n-1) + col-row)
//             }
//         }
//     }

const backTrack = function(col, board, res, n, leftRow, upperDiagonal, lowerDiagonal){
        if(col === n){
            res.push(board.map(row => row.join('')));
            return
        }
        for(let row = 0; row < n; row++){
            // isSafe(row, col, board, n))
            const isSafe = leftRow[row] == 0 && lowerDiagonal[row+col] == 0 && upperDiagonal[n-1 + col-row] == 0
            if(isSafe){
                board[row][col] = 'Q'
                leftRow[row] = 1
                lowerDiagonal[row+col] = 1
                upperDiagonal[n-1 + col-row] = 1
                backTrack(col+1, board, res, n, leftRow, upperDiagonal, lowerDiagonal);
                board[row][col] = "."
                leftRow[row] = 0
                lowerDiagonal[row+col] = 0
                upperDiagonal[n-1 + col-row] = 0
            }
        }
    }

var solveNQueens = function(n) {
    const res = []
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const leftRow = new Array(n).fill(0)
    const upperDiagonal = new Array(2*n-1).fill(0)
    const lowerDiagonal = new Array(2*n-1).fill(0)
    backTrack(0, board, res, n, leftRow, upperDiagonal, lowerDiagonal)
    return res
};