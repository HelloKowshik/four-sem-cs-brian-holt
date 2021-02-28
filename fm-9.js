// Recursion

const factorial = num => {
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
const gcd = (a, b) => {
    let reminder;
    while (1) {
        reminder = a % b;
        if (reminder === 0) {
            break;
        }
        a = b;
        b = reminder;

    }
    return b;
}
const recursiveGCD = (a, b) => {
    if (b == 0) {
        return a;
    }
    return recursiveGCD(b, a % b);
}

const fibonacchi = n => {
    if (n === 1) return 0;
    if (n === 2) return 1;
    // let sum = 0, a = 0, b = 1;
    // for (let i = 3; i <= n; i++){
    //     sum = a + b;
    //     a = b;
    //     b = sum;
    // }
    // return sum;
    return fibonacchi(n - 1) + fibonacchi(n - 2);
}

const fibonacchiDP = n => {
    let fiboArray = [];
    fiboArray[2] = 1;
    if (n === 1) return 0;
    if (n === 2) return 1;
    if (fiboArray[n] > 0) {
        return fiboArray[n];
    }
    fiboArray[n] = fibonacchiDP(n - 1) + fibonacchiDP(n - 2);
    return fiboArray[n];
}

const x = fibonacchiDP(11);
console.log(x);