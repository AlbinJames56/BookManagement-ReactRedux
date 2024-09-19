import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBook, editBook } from "../redux/slice/bookSlice";

const Add = ({ showModal, handleClose, book }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
    } else {
      setTitle("");
      setAuthor("");
    }
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book) {
      dispatch(editBook({ id: book.id, title, author }));
    } else {
      dispatch(addBook({ id: Date.now(), title, author }));
    }
    handleClose();
  };

  return (
    <div
      className={`modal fade ${showModal ? "show" : ""}`}
      style={{ display: showModal ? "block" : "none", zIndex: 1050 }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{book ? "Edit Book" : "Add Book"}</h5>
            <div className="ms-auto">
               <button type="button" className="close" onClick={handleClose}>
              <span>&times;</span>
            </button>
            </div>
           
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
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
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                {book ? "Update Book" : "Add Book"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {showModal  }
    </div>
  );
};

export default Add;
