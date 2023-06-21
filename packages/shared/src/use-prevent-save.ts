
import { useEffect, useCallback} from 'react';

export const usePreventSave = () => {
  const prevent = useCallback((e: KeyboardEvent) => {
    if (e.key === 's' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
    }
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("keydown", prevent);
    };
  }, []);

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
