
class Person {
    constructor(public firstName: string, public lastName: string, public idNumber: number) {}

    printPerson() {
        console.log("Name: " + this.lastName + ", " + this.firstName + "\nID: " + this.idNumber);
    }
}

class Student extends Person {
    idNumber: number;
    scores: number[];

    constructor(firstName: string, lastName: string, idNumber: number, scores: number[]) {
        super(firstName, lastName, idNumber);
        this.scores = scores;
    }

    getLetterGrade(grade: number): string {
        if (grade < 40) return "T";
        else if (grade >= 40 && grade < 55) return "D";
        else if (grade >= 55 && grade < 70) return "P";
        else if (grade >= 70 && grade < 80) return "A";
        else if (grade >= 80 && grade < 90) return "E";
        else return "O";
    }

    calculate() {
        const sum = this.scores.reduce((a, b) => a += b);
        const score = sum / this.scores.length;

        return this.getLetterGrade(score);
    }
}