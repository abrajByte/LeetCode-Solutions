/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
    const stack = []
    const res = new Array(heights.length)

    for(let i=heights.length-1;i>=0;i--){
        let visible = 0

        while(stack.length && stack[stack.length-1] < heights[i]){
            stack.pop()
            visible++
        }
        if(stack.length){
            visible++
        }
        res[i] = visible
        stack.push(heights[i])
    }
    return res
};