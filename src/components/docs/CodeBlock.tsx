import * as React from "react";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

const highlightCode = (code: string): React.ReactNode[] => {
  const lines = code.split("\n");
  
  return lines.map((line, lineIndex) => {
    const parts: React.ReactNode[] = [];
    let remaining = line;
    let keyIndex = 0;

    // Simple syntax highlighting patterns
    const patterns = [
      { regex: /(\/\/.*$)/, className: "code-comment" },
      { regex: /("[^"]*"|'[^']*'|`[^`]*`)/, className: "code-string" },
      { regex: /\b(import|export|from|const|let|var|function|return|if|else|for|while|class|extends|interface|type|as|async|await|default)\b/, className: "code-keyword" },
      { regex: /\b(\d+)\b/, className: "code-number" },
      { regex: /\b([A-Z][a-zA-Z0-9]*)\b/, className: "code-function" },
    ];

    while (remaining.length > 0) {
      let earliestMatch: { index: number; length: number; className: string } | null = null;
      
      for (const pattern of patterns) {
        const match = remaining.match(pattern.regex);
        if (match && match.index !== undefined) {
          if (!earliestMatch || match.index < earliestMatch.index) {
            earliestMatch = {
              index: match.index,
              length: match[0].length,
              className: pattern.className,
            };
          }
        }
      }

      if (earliestMatch && earliestMatch.index === 0) {
        parts.push(
          <span key={`${lineIndex}-${keyIndex++}`} className={earliestMatch.className}>
            {remaining.slice(0, earliestMatch.length)}
          </span>
        );
        remaining = remaining.slice(earliestMatch.length);
      } else if (earliestMatch) {
        parts.push(remaining.slice(0, earliestMatch.index));
        remaining = remaining.slice(earliestMatch.index);
      } else {
        parts.push(remaining);
        remaining = "";
      }
    }

    return (
      <span key={lineIndex}>
        {parts}
        {lineIndex < lines.length - 1 && "\n"}
      </span>
    );
  });
};

export function CodeBlock({ code, language = "tsx", showLineNumbers = false, className }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className={cn("relative group rounded-xl overflow-hidden", className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-code-background border-b border-border/20">
        <span className="text-xs font-mono text-muted-foreground uppercase">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 text-xs font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/20 transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-success" />
              <span className="text-success">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="bg-code-background text-code-foreground p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="font-mono">
          {showLineNumbers ? (
            <table className="border-collapse">
              <tbody>
                {lines.map((line, i) => (
                  <tr key={i}>
                    <td className="pr-4 text-right text-muted-foreground/50 select-none w-8">
                      {i + 1}
                    </td>
                    <td className="whitespace-pre">{highlightCode(line)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            highlightCode(code)
          )}
        </code>
      </pre>
    </div>
  );
}
