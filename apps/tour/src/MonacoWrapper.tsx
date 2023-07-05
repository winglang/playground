import React from 'react';
import Editor from '@monaco-editor/react';

function countLines(str) {
    return (str.match(/\n/g) || '').length + 1;
}

const wrapperStyle = {
    width: '100%',
    overflow: 'hidden',
  };

  const editorStyle = {
    width: 'calc(100% + 20px)', // adjust this value depending on the width of your scrollbar
    marginBottom: '-1em',
  };

  const options = {
    fontSize: 14,
    tabSize: 2,
    minimap: { enabled: false },
    scrollbar: { vertical: "hidden", horizontal: "hidden" },
    scrollBeyondLastLine: false, // disable scrolling beyond the last line
    padding: { top: 10, bottom: 0 },
    lineNumbers: "off",
    readOnly: true,
    autoSize: true,
    autoHeight: true,
    hover: false,
    verticalScrollbarSize: 0,
    renderIndentGuides: false, // Disable indent guides
    renderLineHighlight: 'none',
}

const MonacoWrapper = ({ language, value, currentMode }) => {    
    const lines = countLines(value);
    const height = `${1.5*lines + 1}em`;

    return (
        <div style={wrapperStyle}>
            <div style={editorStyle}>
                <Editor
                    key={"syntac-highlighter"}
                    data-testid={"syntax-highlighter"}
                    theme={currentMode}
                    height={height}
                    defaultLanguage={language}
                    defaultValue={value}
                    loading={'...'}
                    options={options}
                />
            </div>
        </div>
  );
};

export default React.memo(MonacoWrapper);
