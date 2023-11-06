import Blog from "./Blog.js";
const CDN_PROFILE_PIC = "https://private-user-images.githubusercontent.com/142297462/280767480-5c596464-70cd-4e4e-be90-3f4c339e7e7d.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTkyODY3NDEsIm5iZiI6MTY5OTI4NjQ0MSwicGF0aCI6Ii8xNDIyOTc0NjIvMjgwNzY3NDgwLTVjNTk2NDY0LTcwY2QtNGU0ZS1iZTkwLTNmNGMzMzllN2U3ZC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEwNlQxNjAwNDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lNDdlNGFjMTJmOTAwM2FhMjUzNWRmNzRiMjY1OTViM2ZlOTQ1ZjNjNjEyNjhlNjE0ZGNiODIxMGNhZDcwZTMxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.pWt7eNy-j97L4iO1vjI8anDKtklrx2VEMhqLkf03hP8";

function App() {
  return (
    <div>
      <img src={CDN_PROFILE_PIC} alt="nitin" />
      <h1>Nitin Kumar</h1>
      <p> Hello, I'm Nitin. I'm a Software Engineer passionate about building systems that scale. </p>
      <Blog />
    </div>
  );
}

export default App;
