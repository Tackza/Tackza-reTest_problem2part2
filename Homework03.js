function thaiTypeof() {
    let text  = ""
    text = asfdg
    // console.log(type0f(text))
    if (typeof (text) === "number") {
        console.log("ตัวเลข")
    }
    else if (typeof (text) === "object") {
        console.log("ออปเจ็คต์")
    }
    else {
        console.log("ข้อความ")
    }
    return text
}

thaiTypeof()