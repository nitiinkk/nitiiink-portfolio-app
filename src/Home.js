import React from "react";
import imageMeta from "./assets/image.json";
import './styles/Home.css';

const Home = () => {
  return (
    <div>
      <div className="layout_header">
      <img className="profile_img" src= {imageMeta.profile_pic.url} alt={imageMeta.profile_pic.alt}/>
      <h1 className="user_name">Nitin Kumar</h1>
      <p> Hello, I’m <strong>Nitin</strong>. I'm a Software Engineer  <br/>  passionate about building systems that scale.</p>
      </div>
    </div>
  );
}

export default Home;
