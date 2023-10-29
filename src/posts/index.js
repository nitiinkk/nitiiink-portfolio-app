import { remark } from 'remark';
import remarkHtml from 'remark-html';

const doc = `
# this is a title
Hello world
`

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