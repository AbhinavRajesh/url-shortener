import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { User } from "@firebase/auth-types";

import { auth } from "../firebase";

export interface AuthContextInterface {
  user: User | null;
  setUser?: Dispatch<SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextInterface>({
  user: null,
});

const AuthProvider = (props: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(async (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {loading ? "Loading..." : props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
