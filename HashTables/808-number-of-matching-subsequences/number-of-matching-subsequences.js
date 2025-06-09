/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

// function binarySearch(arr, prevIndex) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);

//         if (arr[mid] > prevIndex) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }

//     return left < arr.length ? left : -1;
// }

var numMatchingSubseq = function(s, words) {
    // const charMap = new Map();

    // for (let i = 0; i < s.length; i++) {
    //     if (!charMap.has(s[i])) {
    //         charMap.set(s[i], []);
    //     }
    //     charMap.get(s[i]).push(i);
    // }

    // let totalSeq = 0;

    // for (let word of words) {
    //     let prevIndex = -1;
    //     let isSubsequence = true;

    //     for (let char of word) {
    //         if (!charMap.has(char)) {
    //             isSubsequence = false;
    //             break;
    //         }

    //         const indices = charMap.get(char);
    //         const nextIndex = binarySearch(indices, prevIndex);

    //         if (nextIndex === -1) {
    //             isSubsequence = false;
    //             break;
    //         }

    //         prevIndex = indices[nextIndex];
    //     }

    //     if (isSubsequence) {
    //         totalSeq++;
    //     }
    // }

    // return totalSeq;

    var map = new Map(), count = 0;

    var isValid = (s, word) => {
        if(map.has(word))return map.get(word);
        var index = -1;
        for(const c of word) {
            index = s.indexOf(c, index+1);
            if(index === -1){
                map.set(word, false);
                return false;
            }
        }
        map.set(word, true);
        return true;
    }

    for(const word of words) {
        if(word.length > s.length)continue;
        if(isValid(s, word))count++;
    }
    return count;
};