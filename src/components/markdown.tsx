import ReactMarkdown from "react-markdown";
type MarkdownProps = {
  content: string;
  className?: string;
};

export function Markdown({ content, className }: MarkdownProps) {
  return (
    <div className={className}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
