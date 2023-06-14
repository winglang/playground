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
          "p-1.5 rounded-3xl font-medium",
          "hover:bg-slate-200 hover:dark:bg-slate-700"
      )}
      onClick={onToggle}

    >
      {mode === 'light' && <SunIcon className='w-6 h-6'/>}
      {mode === 'dark' && <MoonIcon className='w-6 h-6'/>}
    </button>
  );
}
