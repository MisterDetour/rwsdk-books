import { RequestInfo } from "rwsdk/worker";
import { db } from "@/db";
import { BookForm } from "../components/BookForm";
import { CategoryForm } from "../components/CategoryForm";
import { Bookshelf } from "../components/Bookshelf";

export async function Home({ ctx }: RequestInfo) {
  const books = await db.book.findMany();
  const categories = await db.category.findMany();
  return (
    <div>
      <Bookshelf books={books} categories={categories} />
      
      <BookForm categories={categories} />
      <CategoryForm />
    </div>
  );
}
