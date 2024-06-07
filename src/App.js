// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import BookshelfPage from './components/BookshelfPage';
import './App.css';

const App = () => {
    const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

    const addToBookshelf = (book) => {
        const newBookshelf = [...bookshelf, book];
        setBookshelf(newBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchPage onAddToBookshelf={addToBookshelf} />} />
                <Route path="/bookshelf" element={<BookshelfPage />} />
            </Routes>
        </Router>
    );
};

export default App;
