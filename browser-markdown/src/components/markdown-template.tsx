import MarkdownConfig from "./MarkdownConfig";

function Markdown(props: IMarkdownProps) {
  return (
    <div className="markdown-config">
      <MarkdownConfig data={props.data} />
      <p>Markdown</p>
    </div>
  );
}

export default Markdown;

interface IMarkdownProps {
  data: string;
}
