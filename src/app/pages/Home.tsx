import { RequestInfo } from "rwsdk/worker";
import { db } from "@/db";
import { BookForm } from "../components/BookForm";

export async function Home({ ctx }: RequestInfo) {
  const books = await db.book.findMany();
  const categories = await db.category.findMany();
  return (
    <div>
      <h2>Books</h2>
      {books.map(book => (
        <div key={book.id}>{book.title}</div>
      ))}
      <BookForm categories={categories} />
    </div>
  );
}
