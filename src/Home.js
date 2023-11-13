import React from "react";
import imageMeta from "./assets/image.json";
import './styles/Home.css';

function Home() {
  return (
    <div>
      <div className="layout_header">
      <img src= {imageMeta.profile_pic.url} alt={imageMeta.profile_pic.alt}/>
      <h1 className="user_name">Nitin Kumar</h1>
      <p> Hello, I’m <strong>Nitin</strong>. I'm a Software Engineer passionate about  <br/> building systems that scale. You can contact me on <a href="https://twitter.com/nitiiink">Twitter 🦓</a>.</p>
      </div>
    </div>
  );
}

export default Home;
