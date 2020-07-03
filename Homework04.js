function evenArraySum(number) {
    let sum = 0
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            sum += number[i]
        }
    }
    return sum
}
console.log(evenArraySum([1, 3, 5, 9])) 