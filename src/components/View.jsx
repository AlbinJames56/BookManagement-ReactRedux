import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Books from './Book'
import { deleteBook  } from '../redux/slice/bookSlice';
import { useNavigate } from 'react-router-dom';
const View=()=>{
    
   const books=useSelector((state)=>state.books);
   const dispatch=useDispatch()
   const navigate=useNavigate()
   const handleEdit=(book)=>{
    navigate('/add',{state:{book}})
   }
 
  return (
    <div>
    {books?.map((book) => (
      <Books key={book.id} book={book} Delete={() => dispatch(deleteBook(book.id))} Edit={()=>handleEdit(book)}/>
    ))}
  </div>
  )
}

export default View