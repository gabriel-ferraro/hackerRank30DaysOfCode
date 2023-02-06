interface AdvancedArithmetic {
    divisorSum(n: number): number;
}

//returns the sum of all divisors of n from 1 to 1000 as an integer
class Calculator implements AdvancedArithmetic {
    public divisorSum(n: number): number {
        let acumulator = 0;
        for (let i = 1; i <= 1000; i++) {
            if (n % i == 0) {
                acumulator += i;
            }
        }

        return acumulator;
    }
}

(function main() {
    let myCalculator: AdvancedArithmetic = new Calculator();

    let sum = myCalculator.divisorSum(6);
    console.log("I implemented: AdvancedArithmetic");
    console.log(sum);
})();