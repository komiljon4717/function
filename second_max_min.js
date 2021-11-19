
let array = [10, 7, 6, 1, 2, 3, 4, 5]


function second_max_min(arr) {
    let index1 = arr.indexOf(Math.max(...arr))
    arr.splice(index1, 1)

    let index2 = arr.indexOf(Math.min(...arr))
    arr.splice(index2, 1)

    let max = Math.max(...arr)
    let min = Math.min(...arr)
    console.log(min, max);
}

second_max_min(array)













