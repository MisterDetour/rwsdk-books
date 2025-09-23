"use client";

import { createBook } from "../pages/functions";

const BookForm = ({ categories }: { categories: any }) => {
   const handleSubmit = async (formData: FormData) => {
    const result = await createBook(formData);
    if (result.success) {
      alert('Added!');
    } else {
      console.error(result.error);
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form action={handleSubmit}>
        <div>
          <input type="text" id="title" name="title" />
          <br />
          <br />
        </div>
        <div>
          <select id="category" name="category">
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
          <br />
          <br />
        </div>
        <div>
          <input type="text" id="image" name="image" />
          <br />
          <br />
        </div>
        <button>Add</button>
      </form>
    </div>
  )
}

export {BookForm}