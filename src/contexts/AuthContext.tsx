import { UserDTO } from '@dtos/userDTO';
import { api } from '@services/api';
import { createContext, useState } from 'react';

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
  isLoadingUserStorageData: boolean;
};

type AuthContextProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] =
    useState(true);

  async function signIn(email: string, password: string) {
    try {
      setIsLoadingUserStorageData(true);

      const { data } = await api.post('/sessions', {
        email,
        password,
      });

      setUser(data.user);

      api.defaults.headers.common['Authorization'] =
        `Bearer ${data.token}`;
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, signIn, isLoadingUserStorageData }}
    >
      {children}
    </AuthContext.Provider>
  );
}
