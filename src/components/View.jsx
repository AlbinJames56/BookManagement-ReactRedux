import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Books from "./Book";
import { deleteBook } from "../redux/slice/bookSlice";
import { useNavigate } from "react-router-dom";
import Add from "./Add";
const View = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  const handleEdit = (book) => {
    setCurrentBook(book);
    setShowModal(true);
  };

  const handleAdd = () => {
    setCurrentBook(null);
    setShowModal(true);
  };

  return (
    <div>
      <div className="d-flex justify-content-end m-5">
        <button className="btn btn-primary ml-auto" onClick={handleAdd}>
          Add Book
        </button>
      </div>
      {books?.map((book) => (
        <Books
          key={book.id}
          book={book}
          Delete={() => dispatch(deleteBook(book.id))}
          Edit={() => handleEdit(book)}
        />
      ))}
      <Add
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        book={currentBook}
      />
    </div>
  );
};

export default View;
