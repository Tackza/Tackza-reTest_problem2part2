function numberOfSquare(height, width) {
    let total, result, ref, side = 0
    if (height > width) {
        ref = width
        side = height
    } else {
        ref = height
        side = width
    }
    if (ref === 1) {
        return side
    }
    for (let i = 1; i <= ref; i++) {
        if (ref % i === 0 && side % i === 0) {
            result = i
        }
    }
    total = (ref * side) / (result * result)
    return total
}
console.log(numberOfSquare(10, 15) ) 