/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
 TIME LIMIT EXCEED:
    const set = new Set(nums)
    let longest = 0
    for(let num of nums){
        if(!set.has(num-1)){
            let len = 0
            while(set.has(num+len)){
                len++
            }
            longest = Math.max(longest, len)
        }
    }
    return longest

 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    const set = new Set(nums);
    let longest = 0;

    for (let num of nums) {
        if (set.has(num)) {
            set.delete(num);
            let prev = num - 1, next = num + 1;

            while (set.has(prev)) set.delete(prev--);
            while (set.has(next)) set.delete(next++);

            longest = Math.max(longest, next - prev - 1);
        }
    }

    return longest;
};