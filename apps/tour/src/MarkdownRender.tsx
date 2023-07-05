import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import MonacoWrapper from './MonacoWrapper';
import SyntaxHighlighterWrapper from './SyntaxHighlighterWrapper';
import { Button } from "@wing-playground/shared/src/Button";

const MarkdownRender = ({ markdown, theme = 'light', editorOptions }) => {
  
  // Function to render code with syntax highlighter
  const components = {
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')

      const [copied, setCopied] = useState(false);

      const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      };

      return !inline && match ? (
        <div style={{ position: 'relative', marginTop: '-14px', marginBottom: '-14px', marginLeft: '-21px', marginRight: '-21px' }}>
          <CopyToClipboard text={children[0]} onCopy={handleCopy}>
          
            <div 
              style={{
                position: 'absolute', 
                top: 0, 
                right: 0, 
                zIndex: 1  // Add a z-index to ensure button appears on top
              }}
            >
              <Button
              >
                {copied ? 'Copied' : 'Copy'}
              </Button>
            </div>
          </CopyToClipboard>
          <MonacoWrapper editorOptions={editorOptions} currentMode={theme} language={match[1]} value={children[0]} />
          <br />
          <SyntaxHighlighterWrapper currentMode={theme} language={match[1]} value={children[0]} />
        </div>
      ) : (
        <code style={{ color: '#d9534f', padding: '1px 5px', borderRadius: '4px'}} className={className} {...props}>
          {children}
        </code>
      )
    },
    blockquote: ({ children }) => {
      return <blockquote style={{color: '#6a737d', borderLeft: '4px solid #dfe2e5', padding: '0 1em'}}>{children}</blockquote>
    }
    // ...other components...
  };


  return <ReactMarkdown 
    children={markdown} 
    components={components} 
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
  />;
};

export default MarkdownRender;
