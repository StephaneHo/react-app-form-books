import { useState } from "react";

export const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {};

  const handleSubmit = (event) => {};

  return (
    <form>
      <label>Nouveau titre:</label>
      <input className="mx-3 bg-slate-300 rounded-sm" value={title} />
      <button className="button is-primary">Enregistrer</button>
    </form>
  );
};
