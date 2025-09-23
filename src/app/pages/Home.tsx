import { RequestInfo } from "rwsdk/worker";
import { db } from "@/db";
import { BookForm } from "../components/BookForm";
import { CategoryForm } from "../components/CategoryFrom";

export async function Home({ ctx }: RequestInfo) {
  const books = await db.book.findMany();
  const categories = await db.category.findMany();
  return (
    <div>
      <h2>Books</h2>
      {books.map(book => (
        <div key={book.id}>
          <a
            href={`https://libweb.cityofalbany.net/eg/opac/results?query=${book.title}&qtype=keyword&locg=2`}
            target="_blank"
            rel="noreferrer"
            >
            <img src={book.image} alt={book.title} width="100" />
          </a>
        </div>
      ))}
      <BookForm categories={categories} />
      <CategoryForm />
    </div>
  );
}
