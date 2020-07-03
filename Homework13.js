function minPairSum(array) {
    let sum = 0
    array.sort(function (a, b) { return a - b })
    sum = array[0] + array[1]
    console.log(`${array[0]} + ${array[1]} = ${sum} `)
    return sum
}
minPairSum([2, 5, 3, 9, 19, 3, 7, 58])