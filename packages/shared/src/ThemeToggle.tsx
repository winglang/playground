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
          "p-1.5 rounded-3xl font-medium relative",
          "hover:bg-slate-200 hover:dark:bg-slate-700",
          "transition-all duration-300",
          'w-10 h-10',
      )}
      onClick={onToggle}

    >
      <SunIcon className={classNames(
        'h-6 w-6',
        'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
        'transition-all duration-300',
        mode === 'light' || 'opacity-0'
      )}/>
      <MoonIcon className={classNames(
        'h-6 w-6',
        'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
        'transition-all duration-300',
        mode === 'dark' || 'opacity-0'
      )}/>
    </button>
  );
}
