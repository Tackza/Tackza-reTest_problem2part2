function toChange(money) {
    let result = ""
    let thousand = Math.floor(money / 1000)
    money = money - thousand * 1000
    let fiveHundred = Math.floor(money / 500)
    money = money - fiveHundred * 500
    let hundred = Math.floor(money / 100)
    money = money - hundred * 100
    let fiveTen = Math.floor(money / 50)
    money = money - fiveTen * 50
    let twenty = Math.floor(money / 20)
    money = money - twenty * 20
    let ten = Math.floor(money / 10)
    money = money - ten * 10
    let five = Math.floor(money / 5)
    money = money - five * 5
    let two = Math.floor(money / 2)
    money = money - two * 2
    let one = Math.floor(money )
    money = money - one
    result = `แบงค์พัน ${thousand} แบงค์ห้าร้อย${fiveHundred} แบงค์ร้อย${hundred} แบงค์ห้าสิบ${fiveTen} แบงค์ยี่สิบ${twenty} เหรียญสิบ${ten} เหรียญห้า${five} เหรียญสองบาท${two} เหรียญบาท${one}`
    return result
}
console.log(toChange(99999)) 