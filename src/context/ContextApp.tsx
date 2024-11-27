import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface ProviderProps {
  children: ReactNode;
}

interface ContextAppValue {
  theme: "light" | "dark";
  handleChangeTheme: () => void;
}

export const GlobalContextApp = createContext<ContextAppValue | null>(null);
const ContextApp: React.FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? (savedTheme as "light" | "dark")
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChangeTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const value: ContextAppValue = useMemo(
    () => ({
      handleChangeTheme,
      theme,
    }),
    [theme]
  );

  return (
    <GlobalContextApp.Provider value={value}>
      {children}
    </GlobalContextApp.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(GlobalContextApp);
  if (!context) {
    throw new Error("useAppContext must be used within a GlobalContextApp");
  }
  return context;
};

export { useAppContext, ContextApp };
