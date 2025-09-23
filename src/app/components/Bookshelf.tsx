"use client";

import { useState } from 'react';

const Bookshelf = ({ books, categories }: { books: any, categories: any }) => {
  const unread = books.filter(
    (book) => book.status == 'unread'
  );

  const [bookshelf, setBookshelf] = useState(unread);
  const [statusFilter, setStatusFilter] = useState('unread');
  const [categoryFilter, setCategoryFilter] = useState(0);

  const filterBooks = (category) => {
    setCategoryFilter(category);

    if (category !== 0) {
      setBookshelf(books.filter(
        book => book.categoryId == category && book.status == 'unread'
      ));
    } else {
      setBookshelf(books);
    }
  }

  const filterBooksStatus = (status) => {
    setStatusFilter(status);

    if(categoryFilter) {
      setBookshelf(books.filter(
        book => book.categoryId == categoryFilter && book.status == status
      ));
    } else {
      setBookshelf(books.filter(
        book => book.status == status
      ));
    }
  }

  return (
    <div>
      <ul className="filters">
        <li>
          <button onClick={ () => filterBooks(0)} className={categoryFilter == 0 ? 'active': ''}>All</button>
        </li>
        {categories.map(category => (
          <li key={category.id}>
            <button onClick={ () => filterBooks(category.id)} className={categoryFilter == category.id ? 'active': ''}>{category.name}</button>
          </li>
        ))}
      </ul>
      <div className="bookshelf">
        {bookshelf.map(book => (
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
      </div>
      <ul className="filters">
        <li>
          <button onClick={ () => filterBooksStatus('unread')} className={statusFilter == 'unread' ? 'active': ''}>Unread</button>
        </li>
        <li>
          <button onClick={ () => filterBooksStatus('reading')} className={statusFilter == 'reading' ? 'active': ''}>Reading</button>
        </li>
        <li>
          <button onClick={ () => filterBooksStatus('read')} className={statusFilter == 'read' ? 'active': ''}>Read</button>
        </li>
      </ul>
    </div>
  )
}

export {Bookshelf}

