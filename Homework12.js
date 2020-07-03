function maxPairSum(array) {
    let sum = 0
    array.sort(function(a, b){return b-a})
    sum = array[0]+array[1]
    console.log(`${array[0]} + ${array[1]} = ${sum} `) 
    return sum
}
maxPairSum([2,5,3,29,19,3,7, 58])