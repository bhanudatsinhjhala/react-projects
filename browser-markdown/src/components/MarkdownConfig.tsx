import Markdown from "markdown-to-jsx";

function MarkdownConfig(props: Readonly<IMarkdownProps>) {
  return (
    <div>
      <div className="markdown-heading preview-heading">
        <h6>PREVIEW</h6>
      </div>
      <div className="markdown-config">
        <Markdown
          options={{
            wrapper: "article",
            forceBlock: true,
          }}
        >
          {props.data}
        </Markdown>
      </div>
    </div>
  );
}

export default MarkdownConfig;
interface IMarkdownProps {
  data: string;
}
