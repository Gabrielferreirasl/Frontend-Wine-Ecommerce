export const setLocalStorage = <T>(key: string, value: T) => localStorage.setItem(key, JSON.stringify(value));
export const getLocalStorage = (key: string) => {
  const result = JSON.parse(localStorage.getItem(key) || '{}');
  return Object.keys(result).length === 0 ? null : result
};
