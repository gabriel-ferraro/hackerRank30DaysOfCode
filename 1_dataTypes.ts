'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

//solution:
function main() {
    let i = 4;
    let d = 4.0;
    let s = "Hackerrank ";

    const newInt = parseInt(readLine());
    const newDouble = parseFloat(readLine());
    const newString = readLine();

    console.log(i + newInt);
    console.log((d + newDouble).toPrecision(2));
    console.log(s + newString);
}
