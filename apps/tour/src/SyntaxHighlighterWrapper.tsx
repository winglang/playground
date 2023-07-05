import React, { useEffect, useRef } from 'react';

import wingLanguageConfiguration from '../../../packages/shared/src/language-configurations/wing-configration.json';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight, dark, vs, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Define your themes
const themes = {
    light: vs,
    dark: vscDarkPlus,
};

const SyntaxHighlighterWrapper = ({ language, value, currentMode }) => {
    return (
        <SyntaxHighlighter style={themes[currentMode]} language={language} children={value} />
    );
};

export default SyntaxHighlighterWrapper;
