export interface ListProps {
  searchValue: string;
}

export interface ChildProps {
  login: string;
  avatar_url: string;
  id: number;
  html_url: string;
}

export interface UserProps {
  src: string;
  name: string;
  url: string;
}

export interface SearchProps {
  setUser: (e: string) => void;
}

export interface LoaderContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}