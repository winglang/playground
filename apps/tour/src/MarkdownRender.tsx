import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import MonacoWrapper from './MonacoWrapper';
import { Button } from "@wing-playground/shared/src/Button";

const MarkdownRender = ({ markdown = "", theme = 'light' }) => {
  
  // Function to render code with syntax highlighter
  const components: any = {
    code({inline, className, children, ...props}: {inline: boolean, className: string, children: any}) {
      const match = /language-(\w+)/.exec(className || '')

      const [copied, setCopied] = useState(false);

      const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      };

      return !inline && match ? (
        <div style={{ position: 'relative', marginTop: '-1em', marginBottom: '-1em', marginLeft: '-1.5em', marginRight: '-1.5em' }}>
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
          <MonacoWrapper currentMode={theme} language={match[1]} value={children[0]} />
        </div>
      ) : (
        <code style={{ color: '#d9534f', padding: '1px 5px', borderRadius: '4px'}} className={className} {...props}>
          {children}
        </code>
      )
    },
    blockquote: ({ children }: { children: any }) => {
      return <blockquote style={{color: '#6a737d', borderLeft: '4px solid #dfe2e5', padding: '0 1em'}}>{children}</blockquote>
    }
    // ...other components...
  }


  return <ReactMarkdown 
    children={markdown} 
    components={components} 
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
  />;
};

export default React.memo(MarkdownRender);
