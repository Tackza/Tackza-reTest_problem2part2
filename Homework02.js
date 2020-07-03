function pow(a, n) {
    let sum = a
    let i = 0
    while (i < n-1) {
        sum *= a
        i++
    }
    return `${a} ยกกำลัง ${n} = ${sum}`
}
console.log(pow(8, 5)) 