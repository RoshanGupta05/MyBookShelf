// src/components/BookshelfPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookshelfPage.css';

const BookshelfPage = () => {
    const [bookshelf, setBookshelf] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(storedBookshelf);
    }, []);

    return (
        <div className="bookshelf-page">
            <h1>My Bookshelf</h1>
            <div className="bookshelf">
                {bookshelf.map((book, index) => (
                    <div key={index} className="book-card">
                        <h3>Book Title: {book.title}</h3>
                        <p>Edition Count: {book.edition_count}</p>
                    </div>
                ))}
            </div>
            <button onClick={() => navigate('/')} className="search-button">Search for more books</button>
        </div>
    );
};

export default BookshelfPage;
