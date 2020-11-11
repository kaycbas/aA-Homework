// Part 1

// function mysteryScoping1() {
//     var x = 'out of block';
//     if (true) {
//         var x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }


// function mysteryScoping2() {
//     const x = 'out of block';
//     if (true) {
//         const x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// function mysteryScoping3() {
//     const x = 'out of block';
//     if (true) {
//         var x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// function mysteryScoping4() {
//     let x = 'out of block';
//     if (true) {
//         let x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// function mysteryScoping5() {
//     let x = 'out of block';
//     if (true) {
//         let x = 'in block';
//         console.log(x);
//     }
//     let x = 'out of block again';
//     console.log(x);
// }

function madLib(verb, adjective, noun) {
    return `We shall ${verb} the ${adjective} ${noun}.`
}

// console.log(madLib('make', 'best', 'guac'))

function isSubstring(str1, str2) {
    return str1.includes(str2)
}

// console.log(isSubstring("time to program", "time"))

// console.log(isSubstring("Jump for joy", "joys"))

function fizzBuzz(arr) {
    const fizzArr = []

    arr.forEach(el => {
        if((el % 3 === 0) ^ (el % 5 === 0)) {
            fizzArr.push(el)
        }
    });
    return fizzArr
}

// console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))

function isPrime(num) {
    if (num < 2) { return false; }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(isPrime(9))
// console.log(isPrime(11))

function sumOfNPrimes(n) {
    const primes = []
    for (let i = 0; primes.length < n; i++) {
        if (isPrime(i)) { primes.push(i) }
    }
    primes_sum = primes.reduce((a,b) => a + b, 0);
    return primes_sum
}

console.log(sumOfNPrimes(3))