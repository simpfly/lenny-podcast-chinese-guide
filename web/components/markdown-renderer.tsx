import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Fix for bold text adjacent to quotes/punctuation in CJK context
  // Ensures (**"...) or (...**) parses correctly by adding spaces where CommonMark requires them
  const processedContent = content
    .replace(/([^\s])(\*\*)(["'“‘])/g, '$1 $2$3') // Add space before ** if followed by quote
    .replace(/(["'”’])(\*\*)([^\s])/g, '$1$2 $3'); // Add space after ** if preceded by quote

  return (
    <div className="prose prose-stone dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-a:text-primary hover:prose-a:underline">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{processedContent}</ReactMarkdown>
    </div>
  );
}
