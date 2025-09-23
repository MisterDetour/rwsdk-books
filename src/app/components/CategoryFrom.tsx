"use client";

import { createCategory } from "../pages/functions";

const CategoryForm = () => {
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
      <h2>Add Category</h2>
      <form action={handleSubmit}>
        <div>
          <input type="text" id="name" name="name" />
          <br />
          <br />
        </div>
        <button>Add</button>
      </form>
    </div>
  )
}

export {CategoryForm}