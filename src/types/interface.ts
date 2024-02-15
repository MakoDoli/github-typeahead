export interface ListProps {
  searchValue: string;
  amount: string;
}

export interface ChildProps {
  login: string;
  avatar_url: string;
  id: number;
  html_url: string;
}

export interface UserResultProps {
  src: string;
  name: string;
  url: string;
}

export interface SearchProps {
  setUser: (e: string) => void;
  setAmount: (e: string) => void;
  setTheme: (e: string) => void;
  mode: string;
}

export interface LoaderContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UserType {
  login: string;
  avatar_url: string;
  bio: string;
  followers: number;
  html_url: string;
  public_repos: number;
}
