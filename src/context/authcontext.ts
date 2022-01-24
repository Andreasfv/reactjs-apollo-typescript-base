import React, { createContext, Dispatch, SetStateAction } from "react";
import User from "../types/User";

export interface AuthContextType {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
    token: string | null;
    setToken: Dispatch<SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
