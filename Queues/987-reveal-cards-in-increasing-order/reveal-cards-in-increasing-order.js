/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a,b)=> a-b)
    const res = new Array(deck.length)
    const q = Array.from( { length: deck.length}, (_,i)=> i )

    for(let num of deck){
        const i = q.shift()
        res[i] = num
        if(q.length){
            q.push(q.shift())
        }
    }
    console.log(res)
    return res
};