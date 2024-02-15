export interface ListProps {
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
  setAmount: (e: string) => void;
  setTheme: (e: string) => void;
  mode: string;
}

export interface LoaderContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: (e: string) => void;
}

export interface UserType {
  login: string;
  avatar_url: string;
  bio: string;
  followers: number;
  html_url: string;
  public_repos: number;
}
