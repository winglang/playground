import { useMemo } from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { setCurrentTheme, useTheme } from './theme-provider';

export const ThemeToggle = () => {

  const { theme, mode } = useTheme();
  return (
    <button className='rounded text-white bg-slate-400 dark:bg-slate-700 p-1' onClick={() => {
      const nextTheme = mode === "light" ? "dark" : "light";
      setCurrentTheme(nextTheme);
    }}>
      { mode === "light" && <SunIcon className='w-5 h-5'/> }
      { mode === "dark" && <MoonIcon className='w-5 h-5'/> }
    </button>
  );
}
