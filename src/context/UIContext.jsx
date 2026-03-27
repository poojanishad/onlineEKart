import { createContext, useContext, useState, useEffect, useRef } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [theme, setThemeState] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const cartIconRef = useRef(null);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <UIContext.Provider value={{ theme, setTheme, cartIconRef }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);