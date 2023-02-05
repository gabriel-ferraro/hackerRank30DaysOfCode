function printFirstTenMultiples(n: number): void {
    for (let i = 0; i < 10; i++) {
        console.log(`${n} x ${i + 1} = ${n * (i + 1)}`);
    }
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);
    firstTenMultiples(n);
}