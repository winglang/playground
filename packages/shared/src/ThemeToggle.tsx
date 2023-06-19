import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Mode, useTheme } from './theme-provider';
import classNames from 'classnames';

export interface ThemeToggleProps {
  mode: Mode;
  onToggle: () => void;
}

export const ThemeToggle = ({ mode, onToggle } : ThemeToggleProps) => {
  const { theme } = useTheme();

  return (
    <button
      className={
        classNames(
          theme.textInput,
          "p-1.5 rounded-3xl font-medium flex",
          "hover:bg-slate-200 hover:dark:bg-slate-700",
          "transition-color duration-300",
      )}
      onClick={onToggle}

    >
      {mode === 'light' && (
        <SunIcon className='h-6 w-6'/>
      )}
      {mode === 'dark' && (
        <MoonIcon className='h-6 w-6'/>
      )}
    </button>
  );
}
