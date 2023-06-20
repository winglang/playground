
import { useCallback, useRef, useEffect } from 'react';


export const useDebounce = (callback: () => void, delay: number) => {

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const debouncedCallback = useCallback(() => {
    console.log('debouncedCallback');
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        console.log('debouncedCallback run');
        callback();
      }, delay);

    },
    [callback, delay]
  );

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return debouncedCallback;
}
