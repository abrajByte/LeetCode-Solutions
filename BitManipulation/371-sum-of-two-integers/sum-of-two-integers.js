/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    // let a is sum means a ^ b
    // let b will hold carry means (a&b)<<1
     while(b != 0){
        let tmp = (a&b)<<1
        a = a ^ b
        b = tmp
    }
    return a
};