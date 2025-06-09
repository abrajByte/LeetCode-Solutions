/**
 * @param {string} s
 * @return {string}
 */

 /*
 if str is mutable then we can reverse the full string in logn and then reverse each word inplace.
 */

 /*
with imutable also we can try in O(1) space.
reverse the char but here for instead of inplace, make new string and update in that.
 */
var reverseWords = function(s) {
    let words = s.split(' ').filter(word => word !== "");
    let left = 0;
    let right = words.length - 1;

    while (left < right) {
        [words[left], words[right]] = [words[right], words[left]];
        left++;
        right--;
    }

    return words.join(' ');
};