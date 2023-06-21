
function toBinary(str: string): string {
  const codeUnits = new Uint16Array(str.length);
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = str.charCodeAt(i);
  }
  return window.btoa(String.fromCharCode(...new Uint8Array(codeUnits.buffer)));
}

function fromBinary(str: string): string {
  const binary = window.atob(str);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return String.fromCharCode(...new Uint16Array(bytes.buffer));
}

export const useSession = (key: string) => {
  const setSession = (value: string): void => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set(key, toBinary(value));
      window.history.replaceState({}, '', url.toString());
    } catch (e) {
        console.error(e);
    }
  }

  const getSession = (): string | null => {
    try {
      const url = new URL(window.location.href);
      const value = url.searchParams.get(key)?.replaceAll(' ', '+');
      if (value) {
        return fromBinary(value);
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  return {
    setSession,
    getSession,
  };
}
