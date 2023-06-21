
import { useEffect, useCallback} from 'react';

export interface UsePreventSaveProps {
  enable?: boolean;
}

export const usePreventSave = ({enable = false}: UsePreventSaveProps) => {
  const prevent = useCallback((e: KeyboardEvent) => {
    if (e.key === 's' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
    }
  }, []);

  useEffect(() => {
    if (enable) {
      window.addEventListener("keydown", prevent);
    }
    return () => {
      window.removeEventListener("keydown", prevent);
    };
  }, [enable, prevent]);

  const preventSave = useCallback(() => {
    window.addEventListener("keydown", prevent);
  }, []);

  const cancelPrevent = useCallback(() => {
    window.removeEventListener("keydown", prevent);
  }, []);

  return {
    preventSave,
    cancelPrevent
  };
}
