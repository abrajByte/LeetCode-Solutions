/**
 * @param {string} s
 * @return {boolean}
 */

 /*
 other approach without hashmap
  if(currentSymbol === '(' || currentSymbol === '{' || currentSymbol === '['){
    push to stack
  }else{
    if((currentSymbol === '(' && popedItem != ')') || (currentSymbol === '(' && popedItem == ')') || (currentSymbol === '(' && popedItem == ')')){
         // valid one
    }
  }

 */
var isValid = function(s) {
    const map = new Map([['(', ')'], ['{', '}'], ['[', ']']])
    const stack = []

    for(let i=0;i<s.length;i++){
        const currentSymbol = s.charAt(i)
        if(currentSymbol === '(' || currentSymbol === '{' || currentSymbol === '['){
            stack.push(currentSymbol)
        }else{
            const popedItem = stack.pop()

            if(currentSymbol !== map.get(popedItem)){
                return false
            }
        }
    }
    if(stack.length > 0){
        return false;
    }
    return true
};