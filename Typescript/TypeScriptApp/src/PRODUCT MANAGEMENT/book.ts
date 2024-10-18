export interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    price: number;
    rating: number;
    reviewsCount: number;
    publisher: string;
    publicationDate: string;
    pages?: number;
    language?: string;
}
