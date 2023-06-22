import { useLocalStorage} from "./localStorageKullan";

export const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("Dark Mode", initialValue);
  return [darkMode, setDarkMode];
};