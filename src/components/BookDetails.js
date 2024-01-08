import { useState } from "react";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { BookEdit } from "./BookEdit";
export const BookDetails = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {};

  const handleEditClick = () => {};

  const handleSubmit = (id, newTitle) => {};

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="mx-20 my-10">
      <div className="my-5">
        <img
          alt="books"
          src={`https://picsum.photos/seed/${book.id}/300/200`}
        />
      </div>
      <div className="flex">
        <div className="text-xl font-bold">{content}</div>
        <button className="mx-3">
          <PencilIcon className="h-6 w-6 text-blue-500" />
        </button>
        <button className="">
          <TrashIcon className="h-6 w-6 text-blue-500" />
        </button>
      </div>
    </div>
  );
};
