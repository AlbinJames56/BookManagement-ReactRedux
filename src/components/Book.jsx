import React from 'react'
 
function Book({book,Delete,Edit}) {
  return (
    <div>
         <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">Author: {book.author}</p>
        <button className="btn btn-warning" onClick={Edit}>
          Edit
        </button>
        <button className="btn btn-danger ml-2" onClick={Delete}>
          Delete
        </button>
      </div>
    </div>
    </div>
  )
}

export default Book