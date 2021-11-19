function long_word(val) {
    let res = ''
    let arr = val.split(" ")
    
    for (const key in arr) {
        if (arr[key].length > res.length) {
            res = arr[key]
        }
    }
    return res
}

let gap = "Veb ishlab chiqish bo'yicha qo'llanma"


console.log(long_word(gap));