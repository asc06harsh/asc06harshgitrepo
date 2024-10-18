import { Book } from './book';

export class BookManager {
    private books: Book[] = [];

    addBook(book: Book) {
        this.books.push(book);
    }

    listBooks(): Book[] {
        return this.books;
    }

    removeBook(id: number) {
        this.books = this.books.filter(book => book.id !== id);
    }
}
