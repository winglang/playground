import { useEffect, useState, useContext, useRef, useMemo } from "react";
import { useExamples, Example, supportedLanguages, LanguageContext } from './use-examples.js';

export interface FilePickerProps {
  examples: Example[];
  currentExample: Example;
  setCurrentExample: React.Dispatch<React.SetStateAction<Example>>; 
  setLanguageContext?: React.Dispatch<React.SetStateAction<LanguageContext>>;
}

export function FilePicker({ examples, currentExample, setCurrentExample, setLanguageContext }: FilePickerProps) {
  const [touched, setTouched] = useState(false);
  const onDropdownClick = (example: Example) => {
    setCurrentExample(example);

    const file =  example.text.split('/').pop()!;
    const ext = file.split('.').pop()!;
    if (setLanguageContext) {
      setLanguageContext({ file: example.text, path: `source.${file.split('.').pop()}`, language: supportedLanguages(ext) })
    }
    setTouched(true);
  }
  return (
    <div className="group">
      <div className="dropdown inline-block relative">
        <button className="dark:text-[#FFFFFF] light:text-[#000000] py-2 px-4 rounded inline-flex items-center">
          <span className="mr-1">{(!touched && currentExample.value !== examples[0].value) ? 'Examples' : currentExample.text}</span>
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
        </button>
        <ul className="group-hover:block bg-[#56657A] z-50 absolute hidden text-[#f1f0f1] pt-1">
          {examples.map(e => {
            return <li className="" key={e.key} onClick={() => onDropdownClick(e)}><a className="rounded-t hover:text-[#1E293B] py-2 px-4 block whitespace-no-wrap" href="#">{e.text}</a></li>
          })}
        </ul>
      </div>
    </div>
  )
}