import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

const useTheme = () => {
  return useContext(ThemeContext);
};
export default useTheme;
