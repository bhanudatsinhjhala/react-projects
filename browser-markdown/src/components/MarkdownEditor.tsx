function MarkdownEditor(props: Readonly<IMarkdownProps>) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.changeData(e.target.value);
  };
  return (
    <div>
      <div className="markdown-heading">
        <h6>MARKDOWN</h6>
      </div>
      <div>
        <textarea
          className="markdown-textarea"
          onChange={(e) => handleChange(e)}
        >
          {props.data}
        </textarea>
      </div>
    </div>
  );
}

export default MarkdownEditor;

interface IMarkdownProps {
  data: string;
  changeData: (data: string) => void;
}
