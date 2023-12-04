import React from 'react';
import axios from 'axios';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const makeData =  async () => {
  const res = await axios.get("https://raw.githubusercontent.com/nitiinkk/-Node.js-Design-Patterns/master/Readme.md");
  console.log(res.data, "hello")
  return res.data;
}
const doc = await makeData();


function Post() {
  return (
    <>
    <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{doc}</Markdown>
    </>
  );
}

export default Post;