class Person {
    age: number;

    constructor(initialAge: number) {
        if (initialAge < 0) {
            console.log("Age is not valid, setting age to 0.");
            this.age = 0;
            return;
        }
        this.age = initialAge;
    }

    amIOld() {
        if (this.age < 13) {
            console.log("You are young.");
        } else if (this.age >= 13 && this.age < 18) {
            console.log("You are a teenager.");
        } else {
            console.log("You are old.");
        }
    }

    yearPasses() {
        this.age++;
    }
}

function main() {
    const T = parseInt(readLine());
    for (let i = 0; i < T; i++) {
        let age = parseInt(readLine());
        let p = new Person(age);
        p.amIOld();
        for (let j = 0; j < 3; j++) {
            p.yearPasses();
        }
        p.amIOld();
        console.log();
    }
}