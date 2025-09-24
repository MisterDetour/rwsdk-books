"use client";

import { db } from "@/db";
import { updateStatus, deleteBook } from "../pages/functions";

const Actions = ({ book }: { book: any }) => {
  const handleDelete = async (book: string) => {
    if(confirm('Are you sure you want to delete this book?')) {
      const result = await deleteBook(book);

      if (result.success) {
        alert('deleted');
        window.location.href = "/";
      }
    }
    
  }

  const handleStatusChange = async (status: string) => {
    const result = await updateStatus(book.id, status);

    if (result.success) {
      alert('status updated');
    }
  }
  
  return (
    <ul className="links">
      <li>
        <select defaultValue={book.status} onChange={(e) => handleStatusChange(e.target.value)}>
          <option value="unread">Unread</option>
          <option value="reading">Reading</option>
          <option value="read">Read</option>
        </select>
      </li>
      <li>
        <button onClick={() => handleDelete(book.id)}>Delete</button>
      </li>
      <li>
        <a href="/">Home</a>
      </li>
    </ul>
  )
}

export {Actions}