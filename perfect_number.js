function perfect_number(num) {
    let box = 0
    for (let i = 1; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            box += i
        }
    }
    if (box === num) {
        console.log(`${num} is perfect number`);
    }
    else{
        console.log(`${num} is not perfect number`);
    }
}



perfect_number(8121)