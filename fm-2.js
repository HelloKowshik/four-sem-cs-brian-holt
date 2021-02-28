let wrap1 = (msg = '-------') => document.write(`<br/>${msg}`);

let wrap = (msg = '-------') => console.log(`\t${msg}`);

function basicRecursion(max, current) {
    if (current > max) return;
    wrap(current);
    basicRecursion(max, current + 1);
}

// basicRecursion(5, 1);
// wrap();
// wrap();

function fibonacchi(num) {
    if (num <= 2) {
        return 1;
    } else {
        return fibonacchi(num - 1) + fibonacchi(num - 2);
    }
}

// for (let i = 0; i < 10; i++){
//     wrap(`${i}: ${fibonacchi(i)}`);
// }

function factorial(num) {
    if (num <= 0) return 1;
    else {
       return num * factorial(num - 1);
    }
}
wrap(`${factorial(6)}`);