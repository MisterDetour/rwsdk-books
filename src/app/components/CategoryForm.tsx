"use client";

import { useState } from "react";
import { createCategory } from "../pages/functions";

const CategoryForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    const result = await createCategory(formData);
    if (result.success) {
      alert('Added!');
    } else {
      console.error(result.error);
    }
  };

  return (
    <div>
      <div className="action">
        <button className="button" onClick={ () => setShowForm(!showForm)}>Add Category</button>
      </div>
      {showForm && (
        <form action={handleSubmit}>
          <h2>Add Category</h2>
          <div>
            <label htmlFor="category">Category</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <button>Add</button>
          </div>
        </form>
      )}
    </div>
  )
}

export {CategoryForm}