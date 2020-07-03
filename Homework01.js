function checkCharacter(strings) {
        if (strings == strings.toUpperCase()) {
            console.log("All character are capital.")
        }
        else if (strings == strings.toLowerCase()) {
            console.log("All character are small.")
        } else {
            console.log("All character are mix.")
        }
    return strings
}
checkCharacter("now")