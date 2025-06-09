/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evaluate = function(n1, n2, operator){
    let result = 0
    switch(operator){
        case '+' : {
            result = n1 + n2
            break
        }
        case '-': {
            result = n1 - n2
            break
        }
        case '*': {
            result = n1 * n2
            break
        }
        case '/': {
            result = Math.trunc(n1/n2)
            break
        }
    }
    return result
 }
var evalRPN = function(tokens) {
    const stack = []
    for(let token of tokens){
        if(!isNaN(token)){
            stack.push(Number(token))
        }else{
            const n1 = stack.pop()
            const n2 = stack.pop()
            stack.push(evaluate(n2, n1, token))
        }
    }
    return stack[0]
};