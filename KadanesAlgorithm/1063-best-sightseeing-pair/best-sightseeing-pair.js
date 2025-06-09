/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let first = values[0]
    let second = 0
    let maxPairSum = 0

    for(let i=1;i<values.length;i++){
        second = values[i]-i
        maxPairSum = Math.max(maxPairSum, (first + second))
        first = Math.max(first, values[i]+i)
    }
    return maxPairSum
};