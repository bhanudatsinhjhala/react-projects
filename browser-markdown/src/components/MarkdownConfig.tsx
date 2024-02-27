import Markdown from "markdown-to-jsx";

function MarkdownConfig(props: Readonly<IMarkdownProps>) {
  return (
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
  );
}

export default MarkdownConfig;
interface IMarkdownProps {
  data: string;
}
