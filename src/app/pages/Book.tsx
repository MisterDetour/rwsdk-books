import { RequestInfo } from "rwsdk/worker";
import { db } from "@/db";
import { Actions } from "../components/Actions";

export async function Book({ params }: RequestInfo) {
  const book = await db.book.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <div>
      <h2>{book?.title}</h2>
      <div>
        <img src={book?.image} alt={book?.title} width="150" />
        <ul className="links">
          <li>
            <a
              href={`https://libweb.cityofalbany.net/eg/opac/results?query=${book?.title}&qtype=keyword&locg=2`}
              target="_blank"
              rel="noreferrer"
              >
              Albany Library
            </a>
          </li>
        </ul>
        <Actions book={book} />
      </div>
    </div>
  );
}
