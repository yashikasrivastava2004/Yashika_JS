class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    // Add book
    addBook(book) {
        this.books.push(book);
        console.log("Book added successfully");
    }

    // Remove book
    removeBook(ISBN) {
        this.books = this.books.filter(book => book.ISBN !== ISBN);
        console.log("Book removed successfully");
    }

    // Display catalog
    displayBooks() {
        console.log(this.books);
    }
}

// Create Library
let library = new Library();

// Create Books
let book1 = new Book("JavaScript Basics", "John", "101");
let book2 = new Book("Learn Java", "David", "102");

// Add Books
library.addBook(book1);
library.addBook(book2);

library.displayBooks();

// Remove Book
library.removeBook("101");

library.displayBooks();