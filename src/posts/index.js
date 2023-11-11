import { remark } from 'remark';
import remarkHtml from 'remark-html';
import React from 'react';
import axios from 'axios';

const makeData =  async () => {
  const res = await axios.get("https://raw.githubusercontent.com/nitiiink1/nitiiink-portfolio-app/master/README.md");
  console.log(res.data, "hello")
  return res.data;
}
const doc = await makeData();

const markdownToHTML = await remark()
  .use(remarkHtml)
  .process(doc)

const contentHtml = markdownToHTML.toString();

function Post() {
  return (
    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
  );
}

export default Post;