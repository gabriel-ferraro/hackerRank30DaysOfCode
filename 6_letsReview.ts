//print even and odd elements from incoming strings, example:
//string hackerRank - result -> Hce akr

function printOddAndEvenChars(phrase: string): void {
    let evenString = "";
    let oddString = "";
    for (let i = 0; i < phrase.length; i++) {
        (i % 2 == 0) ? evenString += phrase[i] : oddString += phrase[i];
    }
    console.log(evenString + " " + oddString);
}

function main() {
    let t = parseInt(readLine());
    for (let iterator = 0; iterator < t; iterator++) {
        let t2 = readLine();
        printOddAndEvenChars(t2);
    }
}