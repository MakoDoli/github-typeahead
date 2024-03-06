import { ReactNode, createContext, useState } from "react";
import { LoaderContextType } from "./LoaderContextType";

export const LoaderContext = createContext<LoaderContextType>({
  isLoading: false,
  setIsLoading: () => {},
  searchValue: "",
  setSearchValue: () => {},
  results: "",
  setResults: () => {},
});

interface LoaderProviderProps {
  children: ReactNode;
}

export const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState("5");

  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        setIsLoading,
        searchValue,
        setSearchValue,
        results,
        setResults,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};
