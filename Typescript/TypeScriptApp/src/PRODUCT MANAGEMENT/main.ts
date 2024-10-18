console.log("Welcome to Book Management System App");

import {BookManager} from './bookManager';
import {Book} from './book';

const bookManager = new BookManager();

const book: Book = {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    price: 500,
    rating: 4.8,
    reviewsCount: 2000,
    publisher: 'J.B. Lippincott & Co.',
    publicationDate: '1960-07-11'
};

bookManager.addBook(book);

let books: Book[] = bookManager.listBooks();
console.log(books);

const book2: Book = {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    price: 300,
    rating: 4.7,
    reviewsCount: 2500,
    publisher: 'Secker & Warburg',
    publicationDate: '1949-06-08'
};

bookManager.addBook(book2);
console.clear();

books = bookManager.listBooks();
console.log(books);

bookManager.removeBook(1);
books = bookManager.listBooks();
console.log(books);
