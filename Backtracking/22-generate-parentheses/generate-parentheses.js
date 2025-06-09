/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    const backtrack = (openCount, closeCount, str) =>{
        if(str.length == n*2){
            res.push(str)
            return
        }

        if(openCount < n){
            backtrack(openCount + 1, closeCount, str+"(")
        }

        if(closeCount < openCount){
            backtrack(openCount, closeCount+1, str+")")
        }
    }
    backtrack(0,0, "")
    return res
};