import { useEffect, useState, useContext, useRef, useMemo } from "react";
import queryString from 'query-string';
import { Buffer } from 'buffer'

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
const defaultExamples = await Promise.all(Object.keys(examplesImports).map(async (e, i) => ({ key: i + 1, text: e.split('/').pop()!, value: await examplesImports[e]() })));

const parsed = queryString.parse(location.search);
let defaultExample: Example;
if (parsed.code) {
  const code = parsed.code as string;
  defaultExample = {
    key: 0,
    text: 'default.w',
    value: Buffer.from(code.replaceAll(' ', '+'), 'base64').toString('utf-8')
  }
}

export function useExamples() {
  const [examples, setExamples] = useState<Example[]>(defaultExamples);
  const [currentExample, setCurrentExample] = useState<Example>(defaultExample || examples[0]);
  const [languageContext, setLanguageContext] = useState<LanguageContext>({ file: currentExample.text, language: 'wing', path: 'source.w' });

  return {
    examples, setExamples,
    currentExample, setCurrentExample,
    languageContext, setLanguageContext
  }
}
