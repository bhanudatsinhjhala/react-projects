function MarkdownEditor(props: Readonly<IMarkdownProps>) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.changeData(e.target.value);
  };
  return (
    <div>
      <textarea className="markdown-textarea" onChange={(e) => handleChange(e)}>
        {props.data}
      </textarea>
    </div>
  );
}

export default MarkdownEditor;

interface IMarkdownProps {
  data: string;
  changeData: (data: string) => void;
}
