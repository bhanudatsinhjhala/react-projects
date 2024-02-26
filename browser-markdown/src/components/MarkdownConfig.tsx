import Markdown from "markdown-to-jsx";
import styled from "styled-components";

const H1 = styled.h1`
  font-weight: 800;
`;

const H2 = styled.h2`
  font-weight: 300;
`;
const H3 = styled.h3`
  font-size: 24px;
`;

const H4 = styled.h4`
  font-size: 20px;
`;

const H5 = styled.h5`
  font-size: 16px;
`;

const H6 = styled.h6`
  font-size: 14px;
  color: #e56743;
`;

const Blockquote = styled.blockquote`
  padding: 1.5rem 1rem;
  background-color: #2b2c30;
  border-left: #e56743 5px solid;
  border-radius: 3px;
  color: #fffff;
  font-weight: 500;
  margin-left: 0;
`;

const A = styled.a`
  text-decoration: underline;
  color: inherit;
`;

function MarkdownConfig() {
  const data =
    "# Welcome to Markdown\n\nMarkdown is a **lightweight** markup language that you can use to add formatting elements to plaintext text documents. \n\n --- \n\n## How to use this?\n\n 1. Write markdown in the markdown editor window\n 2. See the rendered markdown in the preview window \n\n [x] This is checkbox\n\n### Features \n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```";
  return (
    <div>
      <Markdown
        options={{
          wrapper: "article",
          forceBlock: true,
          overrides: {
            h1: {
              component: H1,
            },
            h2: {
              component: H2,
            },
            h3: {
              component: H3,
            },
            h4: {
              component: H4,
            },
            blockquote: {
              component: Blockquote,
            },
            a: {
              component: A,
            },
            h5: {
              component: H5,
            },
            h6: {
              component: H6,
            },
          },
        }}
      >
        {data}
      </Markdown>
    </div>
  );
}

export default MarkdownConfig;
