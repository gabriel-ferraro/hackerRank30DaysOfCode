//create a function that recieves a base 10 integer, this integer must be converted to binary (base 2);
//the function must return the greatest quantity of consecutive ones present in the binary number, as a base 10 number integer;

function consecutiveOnes(n: number) {
    let currentConsecutiveOnes = 0;
    let maxConsecutiveOnes = 0;

    while (n > 0) {
        let remainder = n % 2;
        if (remainder == 1) {
            currentConsecutiveOnes += 1;
            if (currentConsecutiveOnes > maxConsecutiveOnes) {
                maxConsecutiveOnes = currentConsecutiveOnes;
            }
        } else {
            currentConsecutiveOnes = 0;
        }
        n = Math.floor(n / 2);
    }
    return maxConsecutiveOnes;
}

console.log(consecutiveOnes(5));
console.log(consecutiveOnes(13));
console.log(consecutiveOnes(30));