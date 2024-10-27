import React, { useState } from "react";
import plus from './plus.png'

export default function Library() {

    const [books, setBooks] = useState([
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover: "gatsby.jpg", description: "A classic novel...", date: "26 Oct 2024" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", cover: "mockingbird.jpg", description: "Another classic...", date: "25 Oct 2024" },
    ]);
    return (
        <>
            <div className="container text-white flex flex-col h-[180vh]">
                <div className="text-container2 mx-32 mt-20 flex-none w-72">

                        <h1 className="welcome-container font-medium text-5xl bg-gradient-to-r from-green-200 via-blue-300 to-blue-700 bg-clip-text text-transparent">
                            Library
                        </h1>
                        <h2 className="books-title font-medium text-3xl mt-20 " style={{color:'#e6fffa',}}>
                            Books
                        </h2>
                        <div className="card-container p-16 border-2 rounded-lg mt-6 flex flex-col items-center">
                            <img src={plus} alt="Plus" className="size-8"/>
                            <h2 className="mt-4 text-1xl">New NoteBook</h2>
                        </div>
                </div>
                
                <h2 className="books-title font-medium text-3xl mt-20 mx-32" style={{color:'#e6fffa',}}>
                            Recent
                     </h2>
                <div className="flex gap-4 mx-32 mt-6">
                    
                    {books.map((book, index) => (
                        <div key={index} className="book-card bg-gray-800 rounded-lg shadow-md card-container p-12 border-2 rounded-lg mt-6 flex flex-col items-center">
                            <div className="book-details mt-4">
                                <h3 className="text-xl font-semibold">{book.title}</h3>
                                <p className="text-gray-400 text-sm">By {book.author}</p>
                                <p className="mt-2 text-sm">{book.date}</p> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                
            </div>
        </>
    );
}
