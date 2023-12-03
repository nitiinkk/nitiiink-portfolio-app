import React from "react";
import Navbar from "./Navbar.js";
import Bookshelf from "./Bookshelf.js";
import Projects from "./Projects.js";
import Blog from "./Blog.js";
import {Route, Routes } from "react-router-dom";
import Home from "./Home.js";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bookshelf" element={<Bookshelf />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

const NotFound = () => {
    return (
        <>
        <h1 style={{textAlign: "center"}}>404</h1>
        <h2 style={{textAlign: "center"}}>Sorry, this page isn't available :(</h2>
        <p style={{textAlign: "center"}}>The page you are looking for was removed, renamed or never existed. <br/> 
            But I'm guessing you missed something. Can you double check the URL? <br/>
            Or you just click on the button below to navigate to the homepage.</p>
        <a style={{textAlign: "center", display: "block"}} href="/">Back to Home Page</a>
        </>
    )
}

export default App;