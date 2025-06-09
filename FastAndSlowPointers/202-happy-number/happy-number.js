/**
 * @param {number} n
 * @return {boolean}
 */

let getNextSum = function(num){
    let nextNum = 0;
    while(num > 0){
        let digit = num % 10;
        num = Math.floor(num/10);
        nextNum += digit ** 2;
    }

    return nextNum;
}

var isHappy = function(n) {
    let slow = n;
    let fast = n;
    while(true){
        slow = getNextSum(slow);
        fast = getNextSum(getNextSum(fast));
        if(fast === 1){
            return true;
        }else if(fast === slow){
            return false;
        }
    }
};