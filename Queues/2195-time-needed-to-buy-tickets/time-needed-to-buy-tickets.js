/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let res = 0

    for(let i=0;i<tickets.length;i++){
        if(i <= k){
            res += Math.min(tickets[i], tickets[k])
        }else{
            res += Math.min(tickets[i], tickets[k] - 1)
        }
    }
    return res
};