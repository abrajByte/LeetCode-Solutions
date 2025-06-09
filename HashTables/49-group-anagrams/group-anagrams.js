/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function(strs) {
//     const map = new Map()
//     for(let str of strs){
//         let isGroupMatched = false
//         const newMap = new Map()
//         for(let char of str){
//             newMap.set(char, (newMap.get(char) || 0) +1)
//         }
        
//         for(let key of map.keys()){
//             let isAnagram = true
//             if(map.get(key)[0].length != str.length){
//                 continue;
//             }
//             for(let char of str){
//              if(key.get(char) != newMap.get(char)){
//                  isAnagram = false
//                  break;
//              }
//             }
//             if(isAnagram){
//                 map.get(key).push(str)
//                 isGroupMatched = true
//                 break;
//             }
//         }
//         if(!isGroupMatched){
//             map.set(newMap, [str])
//         }
//     }
//     return Array.from(map.values())
// };

var groupAnagrams = function(strs) {
   const map = new Map();
    for (let str of strs) {
        const freq = Array(26).fill(0);
        for (let char of str) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        const key = freq.join('#');

        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
};