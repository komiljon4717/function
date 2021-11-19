
function prime_number(num) {
    count = 0
    for (let i = 2; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            count++
        }
    }
    if (count > 0) {
        console.log("Not prime number");
    }
    else{
        console.log("Prime number");
    }
}


prime_number(17)