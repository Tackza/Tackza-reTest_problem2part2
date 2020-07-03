function maxPossibleNumber(number) {
    let sum = ""
    let result = ""
    sum = number.toString()
    let decimal = sum.indexOf(".")
    let count = sum.replace(".", "")
    let num1 = count.split("")
    let num2 = num1.sort(function (a, b) { return b - a })
    num2.splice(decimal, 0, ".")
    for (let i = 0; i < num2.length; i++) {
        result += num2[i]
    }
    return result
}
console.log(maxPossibleNumber(45678983353.64545)) 