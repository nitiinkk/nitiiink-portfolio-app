import profilePic from "./public/images/profile.jpg";
import Blog from "./Blog.js";

function App() {
  return (
    <div>
      <img src={profilePic} alt="nitin"/>
      <h1>Nitin Kumar</h1>
      <p> Hello, I'm Nitin. I'm a Software Engineer passionate about building systems that scale. </p>
      <Blog/>
    </div>
  );
}

export default App;
