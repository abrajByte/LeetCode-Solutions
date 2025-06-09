/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

 /*

 while(stack.length && temperatures[i] >= stack[stack.length-1][0]){
            stack.pop()
        }
        result[i] = stack.length ? stack[stack.length-1][1] - i : 0
        stack.push([temperatures[i], i])

 */
var dailyTemperatures = function(temperatures) {
    const stack = []
    const result = new Array(temperatures.length)

    for(let i=temperatures.length-1;i>=0;i--){
        while(stack.length && temperatures[i] >= temperatures[stack[stack.length-1]]){
            stack.pop()
        }
        result[i] = stack.length ? stack[stack.length-1] - i : 0
        stack.push(i)
    }
    return result
};