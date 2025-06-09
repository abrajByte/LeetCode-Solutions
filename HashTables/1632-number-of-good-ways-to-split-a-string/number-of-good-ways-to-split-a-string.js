/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    let prefix =  Array(s.length); // left to right unique char count
    let sufix = Array(s.length); // right to left unique char count
    let prefixset = new Set();
    let sufixset = new Set();
    let str = '';
    let goodcount = 0;

    for(let i=0; i<s.length; i++){
        prefixset.add(s[i]); // keep the unique char only
        sufixset.add(s[s.length-1-i]); 
        prefix[i] = prefixset.size; // size of set means till here, this much unique char we found
        sufix[s.length-1-i] = sufixset.size;
    }

    for(let i=1; i<sufix.length; i++){
        if(prefix[i-1] === sufix[i]){ // if we split prefix-1 and suffixx then unique char should same then its good-split 
            goodcount++;
        }
    }
    return goodcount;
};