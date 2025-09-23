"use client";

import { useState } from "react";
import { createBook } from "../pages/functions";

const BookForm = ({ categories }: { categories: any }) => {
  const [showForm, setShowForm] = useState(false);

   const handleSubmit = async (formData: FormData) => {
    const result = await createBook(formData);
    if (result.success) {
      window.location.href = "/";
    } else {
      console.error(result.error);
    }
  };

  return (
    <div>
      <div className="action">
        <button className="button" onClick={ () => setShowForm(!showForm)}>Add Book</button>
      </div>
      {showForm && (
        <form action={handleSubmit}>
          <h2>Add Book</h2>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <select id="category" name="category">
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input type="text" id="image" name="image" />
          </div>
          <div>
            <button>Add</button>
          </div>
        </form>
      )}
    </div>
  )
}

export {BookForm}