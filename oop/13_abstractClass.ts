abstract class Book {
    constructor(public title: string, public author: string, public price: number) {}

    display() {
        console.log("Title: " + this.title + "\nAuthor: " + this.author + "\nPrice: " + this.price);
    }
}


class MyBook extends Book {
    constructor(title: string, author: string, price: number) {
        super(title, author, price);
    }
}

function main(title: string, author: string, price: number) {

    const myBook = new MyBook(title, author, price);
    myBook.display();
}

main("The Alchemist", "Paulo Coelho", 248);