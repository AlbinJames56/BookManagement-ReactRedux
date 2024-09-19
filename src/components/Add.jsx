import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, editBook } from "../redux/slice/bookSlice";
const Add = ({ book }) => {
  const [title, setTitle] = useState(book ? book.title : "");
  const [author, setAuthor] = useState(book ? book.author : "");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (book) {
      dispatch(editBook({ id: book.id, title, author }));
    } else {
      dispatch(addBook({ id: Date.now(), title, author }));
    }
    setTitle("");
    setAuthor("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="container mt-3">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book Title"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {book ? "Edit Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default Add;
