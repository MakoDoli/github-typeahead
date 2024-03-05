export type ListProps = {
  amount: string;
};
export type SearchType = {
  searchValue: string;
};

export type ChildProps = {
  login: string;
  avatar_url: string;
  id: number;
  html_url: string;
};

export type UserResultProps = {
  src: string;
  name: string;
  url: string;
};

export type SearchProps = {
  setAmount: (e: string) => void;
  setTheme: (e: string) => void;
  mode: string;
};

export type LoaderContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: (e: string) => void;
};

export type UserType = {
  login: string;
  avatar_url: string;
  bio: string;
  followers: number;
  html_url: string;
  public_repos: number;
};
