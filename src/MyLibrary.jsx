import './MyLibrary.css';
import { useState } from "react";

function MyLibrary() {
    const [books, setBooks] = useState([
        "The confident woman",
        "Man's search for meaning",
        "The forge",
        "my big mouth"
    ]);

    const [authors, setAuthors] = useState([
        "Joyce Meyer",
        "Victor Frank",
        "Susan Hilton",
        "Joyce Meyer"
    ]);

    const [newBook, setNewBook] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [displayedAuthor, setDisplayedAuthor] = useState("");

    // Input handlers
    function handleBookInputChange(event) {
        setNewBook(event.target.value);
    }

    function handleAuthorInputChange(event) {
        setNewAuthor(event.target.value);
    }

    // Add handlers
    function addBook() {
        if (newBook.trim() !== "") {
            setBooks(prev => [...prev, newBook]);
            setNewBook("");
        }
    }

    function addAuthor() {
        if (newAuthor.trim() !== "") {
            setAuthors(prev => [...prev, newAuthor]);
            setNewAuthor("");
        }
    }

    // Show author button logic
    function showAuthorName() {
        setDisplayedAuthor(newAuthor);
    }

    // Delete handlers
    function deleteBook(index) {
        setBooks(prev => prev.filter((_, i) => i !== index));
    }

    function deleteAuthor(index) {
        setAuthors(prev => prev.filter((_, i) => i !== index));
    }

    return (
        <div className="my-library">
            <h2>MY LIBRARY</h2>

            {/* Book Input */}
            <div>
                <input
                    type="text"
                    placeholder="Enter a book"
                    value={newBook}
                    onChange={handleBookInputChange}
                />
                <button className="addbook-button" onClick={addBook}>
                    Add Book
                </button>
            </div>

            {/* Author Input */}
            <div>
                <input
                    type="text"
                    placeholder="Enter the author's name"
                    value={newAuthor}
                    onChange={handleAuthorInputChange}
                />
                <button className="addauthor-button" onClick={addAuthor}>
                    Add Author
                </button>
                <button className="showauthor-button" onClick={showAuthorName}>
                    Show Author Name
                </button>

                {displayedAuthor && (
                    <p className="displayed-author">Author: {displayedAuthor}</p>
                )}
            </div>

            {/* Book List */}
            <ol>
                {books.map((book, index) => (
                    <li key={index}>
                        <span className="text">{book}</span>
                        <button className="deletebook-button" onClick={() => deleteBook(index)}>DeleteB</button>
                        <button className="deleteauthor-button" onClick={() => deleteAuthor(index)}>DeleteA</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default MyLibrary;
