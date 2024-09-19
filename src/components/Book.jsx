import React from "react";

function Book({ book, Delete, Edit }) {
  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <h2 className="card-title">{book.title}</h2>
          <p className="card-text">Author: {book.author}</p>
          <button className="btn btn-warning" onClick={Edit}>
            Edit
          </button>
          <button className="btn btn-danger m-2 " onClick={Delete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Book;
