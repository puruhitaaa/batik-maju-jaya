export interface IAuth {
  _id: string;
  name: string;
  email: string;
  token: string;
  isAdmin: boolean;
}

export type AuthContextType = {
  auth: IAuth;
  loading: boolean;
  error: string;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
};
