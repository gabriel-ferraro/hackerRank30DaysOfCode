abstract class Book {
    title: string;
    author: string;
    price: number;

    constructor(title: string, author: string, price: number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

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