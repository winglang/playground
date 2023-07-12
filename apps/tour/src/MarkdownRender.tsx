import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import MonacoWrapper from './MonacoWrapper';
import classNames from 'classnames';

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
        <div className='group' style={{ position: 'relative', marginTop: '-1em', marginBottom: '-1em', marginLeft: '-1.5em', marginRight: '-1.5em' }}>
          <CopyToClipboard text={children[0]} onCopy={handleCopy}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                zIndex: 1  // Add a z-index to ensure button appears on top
              }}
              className='opacity-0 group-hover:opacity-100 transition-all'
            >
              <button className={classNames(
                "opacity-40 hover:opacity-100 border rounded-lg p-1.5 mr-2 mt-2 transition-all",
                "bg-white border-[#DADDE1] text-[#393A34]",
                "dark:bg-[#334155] dark:border-[#606770] dark:text-[#F8F8F2]",
              )}>
                {copied &&
                  <svg viewBox="0 0 24 24" height="18px">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" fill="#84cc16"></path>
                  </svg>
                }
                {!copied &&
                  <svg viewBox="0 0 24 24" height="18px">
                    <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"  fill="currentColor"></path>
                  </svg>
                }
              </button>
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
