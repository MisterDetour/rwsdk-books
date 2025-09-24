"use client";

import { db } from "@/db";
import { deleteBook } from "../pages/functions";

const Actions = ({ book }: { book: any }) => {
  const handleDelete = async (book) => {
    const result = await deleteBook(book);

    if (result.success) {
      alert('deleted');
      window.location.href = "/";
    }
  }
  return (
    <ul className="links">
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