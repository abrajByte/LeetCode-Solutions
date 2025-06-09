/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = []
    stack.push(-1)
    let maxLen = 0
    
    for(let i=0;i<s.length;i++){
        if(s[i] === '('){
            stack.push(i)
        }else{
            stack.pop()
            if(!stack.length){
                stack.push(i)
            }else{
                maxLen = Math.max(maxLen, i-stack[stack.length-1])
            }
        }
    }
    return maxLen
};