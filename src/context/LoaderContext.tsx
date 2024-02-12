import { ReactNode, createContext, useState } from "react";
import { LoaderContextType } from "@/types/interface";
export const LoaderContext = createContext<LoaderContextType>({
  isLoading: false,
  setIsLoading: () => {},
});
interface LoaderProviderProps {
  children: ReactNode;
}
export const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};
