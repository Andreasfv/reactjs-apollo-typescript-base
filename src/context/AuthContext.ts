import { createContext, Dispatch, SetStateAction } from "react";
import User from "../types/User";

export interface AuthContext {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
}
const AuthContext = createContext<AuthContext | null>(null);

export default AuthContext;
