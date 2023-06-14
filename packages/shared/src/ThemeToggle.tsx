import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { setCurrentTheme, useTheme } from './theme-provider';
import classNames from 'classnames';
import {useCallback} from 'react';

export const ThemeToggle = () => {
  const { theme, mode } = useTheme();

  const toggleTheme = useCallback(() => {
    setCurrentTheme(mode === 'dark' ? 'light' : 'dark');
  }, [mode]);

  return (
    <button
      className={
        classNames(
          "p-1.5 rounded-3xl font-medium",
          "text-slate-900 dark:text-white",
          "hover:bg-slate-200 hover:dark:bg-slate-700"
      )}
      onClick={() => toggleTheme()}

    >
      {mode === 'light' && <SunIcon className='w-6 h-6'/>}
      {mode === 'dark' && <MoonIcon className='w-6 h-6'/>}
    </button>
  );
}
