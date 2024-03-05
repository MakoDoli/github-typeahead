export type LoaderContextType = {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    searchValue: string;
    setSearchValue: (e: string) => void;
  };