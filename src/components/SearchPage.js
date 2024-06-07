// src/components/SearchPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookCard from './BookCard';
import './SearchPage.css';

const SearchPage = ({ onAddToBookshelf }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        setQuery(e.target.value);
        if (e.target.value) {
            const response = await fetch(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
            const data = await response.json();
            setResults(data.docs);
        } else {
            setResults([]);
        }
    };

    return (
        <div className="search-page">
            <h1>Search by book name:</h1>
            <input type="text" value={query} onChange={handleSearch} placeholder="Search for a book..." />
            <div className="results">
                {results.map((book) => (
                    <BookCard key={book.key} book={book} onAddToBookshelf={onAddToBookshelf} />
                ))}
            </div>
            <button onClick={() => navigate('/bookshelf')} className="bookshelf-button">My Bookshelf</button>
        </div>
    );
};

export default SearchPage;
