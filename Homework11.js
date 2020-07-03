function dotProduct(vector1, vector2) {
    let num1 = vector1.length
    let num2 = vector2.length
    let sum = 0 
    let vecNum = 0
    if (num1 < num2) {
        vecNum = num1
    } else {
        vecNum = num2
    }
    for (let i = 0; i < vecNum; i++) {
        sum += (vector1[i] * vector2[i])
    }
    return sum
}
console.log(dotProduct([2, 8, 9, 11],[3, 4])) 