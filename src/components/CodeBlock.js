import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./CodeBlock.css";

export default function CodeBlock({ language = "javascript", code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    });
  };

  return (
    <div className="code-block">
      <div className="code-header">
        <span className="language-label">{language.toUpperCase()}</span>
        <button onClick={handleCopy} className="copy-btn">
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          background: "var(--bg-card)",
          fontSize: "0.95em",
          borderRadius: "8px",
          padding: "1rem",
        }}
        codeTagProps={{
          style: { fontFamily: '"Fira Code", monospace' },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
