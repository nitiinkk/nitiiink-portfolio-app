import Blog from "./Blog.js";
import imageMeta from "./assets/image.json";

function App() {
  return (
    <div>
      <h1>Nitin Kumar</h1>
      <img src= {imageMeta.profile_pic.url} alt={imageMeta.profile_pic.alt}/>
      <p> Hello, I'm Nitin. I'm a Software Engineer passionate about building systems that scale. </p>
      <Blog />
    </div>
  );
}

export default App;
