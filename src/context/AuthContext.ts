import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import User from "../types/User";

export interface AuthContext {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
    token: string | null;
    setToken: Dispatch<SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContext | null>(null);

export default AuthContext;
