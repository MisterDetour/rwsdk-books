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
              href={`https://www.amazon.com/s?k=${book?.title}&i=stripbooks`}
              target="_blank"
              rel="noreferrer"
              >
              Amazon
            </a>
          </li>
          <li>
            <a
              href={`https://libweb.cityofalbany.net/eg/opac/results?query=${book?.title}&qtype=keyword&locg=2`}
              target="_blank"
              rel="noreferrer"
              >
              Albany Library
            </a>
          </li>
          <li>
            <a
              href={`https://corvallis.aspendiscovery.org/Union/Search?lookfor=${book?.title}`}
              target="_blank"
              rel="noreferrer"
              >
              Corvallis Library
            </a>
          </li>
          <li>
            <a
              href={`https://www.abebooks.com/servlet/SearchResults?ds=20&kn=${book?.title}&sts=t`}
              target="_blank"
              rel="noreferrer"
              >
              AbeBooks
            </a>
          </li>
          <li>
            <a
              href={`https://www.google.com/search?q=${book?.title}+mass+market+paperback&oq=`}
              target="_blank"
              rel="noreferrer"
              >
              Paperback
            </a>
          </li>
          
        </ul>
        <Actions book={book} />
      </div>
    </div>
  );
}
