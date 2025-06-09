/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const mask = 1
    let counter = 0

    while(n){
        if(mask&n){
            counter++
        }
        n >>= 1
    }
    return counter
};