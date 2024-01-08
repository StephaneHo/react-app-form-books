import { useState } from "react";

import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {};

  const deleteBookById = (id) => {};

  const createBook = (title) => {
    //{ id: Math.round(Math.random() * 9999), title },
  };

  return (
    <div className="mx-20">
      <h1 className="text-3xl font-bold underline mx-20 my-20">Mes livres</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
