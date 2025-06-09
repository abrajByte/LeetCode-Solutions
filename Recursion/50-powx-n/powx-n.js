/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0){
        return 1
    }
    if(n < 0){
        return 1 / myPow(x, -n)
    }
    
    let half = myPow(x, Math.floor(n/2))
    return n&1 ? half * half * x : half * half
};