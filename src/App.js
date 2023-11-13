import React from "react";
import Blog from "./Blog.js";
import Navbar from "./Navbar.js";
import BookShelf from "./BookShelf.js";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.js";

function App() {
    return (
        <>
            <Navbar />
            <Home/>
            <Routes>
                <Route path="/bookshelf" element={<BookShelf />} />  
                <Route path="/blogs" element={<Blog />} />
            </Routes>
        </>
    )
}

export default App;