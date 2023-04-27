import { useEffect, useState, useContext, useRef, useMemo } from "react";

export interface Example {
  key: number;
  text: string;
  value: string;
}

const examplesImports = import.meta.glob('../examples/*.*', { as: 'raw' });
const defaultExamples = await Promise.all(Object.keys(examplesImports).map(async (e, i) => ({ key: i, text: e.split('/').pop()!, value: await examplesImports[e]() })));

export function useExamples() {
  const [examples, setExamples] = useState<Example[]>(defaultExamples);
  const [currentExample, setCurrentExample] = useState<Example>(examples[0]);

  return {
    examples,
    setExamples,
    currentExample,
    setCurrentExample,
  }
}