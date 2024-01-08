import { BookDetails } from "./BookDetails";

export const BookList = ({ books, onDelete, onEdit }) => {
  const renderedBooks = books.map((book) => {
    return <BookDetails />;
  });

  return <div className="book-list">{renderedBooks}</div>;
};
