calculateInterest = (money, years) => {
    for (let i = 1; i <= years; i++) {
        money += ((money * 0.025))
    }
    return money
}
console.log(calculateInterest(15126, 14)) 