export interface ListProps {
  searchValue: string;
}

export interface ChildProps {
  login: string;
  avatar_url: string;
  id: number;
}

export interface UserProps {
  src: string;
  name: string;
}
export interface SearchProps {
  setUser: (e: string) => void;
}
