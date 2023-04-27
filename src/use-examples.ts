import { useEffect, useState, useContext, useRef, useMemo } from "react";

export interface Example {
  key: number;
  text: string;
  value: string;
}

export interface LanguageContext {
  file?: string;
  path: string;
  language: string;
}

export const supportedLanguages = (extension: string): string => {
  switch (extension) {
    case 'w':
      return 'wing'
      case 'js':
        return 'js'
    default:
      throw new Error('unsupported language extension')
  }
}

const examplesImports = import.meta.glob('../examples/*.*', { as: 'raw' });
const defaultExamples = await Promise.all(Object.keys(examplesImports).map(async (e, i) => ({ key: i, text: e.split('/').pop()!, value: await examplesImports[e]() })));

export function useExamples() {
  const [examples, setExamples] = useState<Example[]>(defaultExamples);
  const [currentExample, setCurrentExample] = useState<Example>(examples[0]);

  const [languageContext, setLanguageContext] = useState<LanguageContext>({ file: currentExample.text, language: 'wing', path: 'source.w' });

  return {
    examples, setExamples,
    currentExample, setCurrentExample,
    languageContext, setLanguageContext
  }
}