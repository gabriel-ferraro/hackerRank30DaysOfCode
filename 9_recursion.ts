//practicing recursion

function factorial(n: number): number {
    if (n <= 1) { //base case
        return 1;
    } else { //recursive case
        return n * factorial(n - 1);
    }
}

function summation(n: number): number {

    if (n <= 0) {
        return 0;
    } else {
        return n + summation(n - 1);
    }
}

function exponentiation(base: number, exponent: number): number {
    if (exponent <= 0) {
        return 1;
    } else {
        return base * exponentiation(base, exponent - 1);
    }
}

console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(4));

console.log(summation(-10));
console.log(summation(3));
console.log(summation(6));

console.log(exponentiation(0, 10));
console.log(exponentiation(2, 3));
console.log(exponentiation(4, 4));