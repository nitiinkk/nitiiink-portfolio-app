import profilePic from "./public/images/profile.jpg";
import Blog from "./Blog.js";
import {useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState("");
  
  const getData = async function () {
    console.log('making the api call');
    try {
      await axios.get('https://1d38-103-161-56-71.ngrok-free.app/hello').then((res) => {
        setData(res.data.message);
      });
    } catch (error) {
      console.log(error);
      setData("error123")
    }

  }
  
  useEffect(()=>{
    getData()
  }, [])
  
  return (
    <div>
      <img src={profilePic} alt="nitin" />
      <h1>Nitin Kumar</h1>
      <h2>{data}</h2>
      <p> Hello, I'm Nitin. I'm a Software Engineer passionate about building systems that scale. </p>
      <Blog />
    </div>
  );
}

export default App;
