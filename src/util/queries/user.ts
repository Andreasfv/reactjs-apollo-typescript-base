import { gql } from "@apollo/client";
import User from "../../types/User";
export interface LoginData {
    login: {
        ok: boolean;
        user: User | null;
        token: string | null;
    };
}
export const LOGIN_USER = gql`
    mutation LoginUser($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            ok
            token
            user {
                id
                username
                lastName
                email
                groups
            }
        }
    }
`;

//TODO LOGIN USER WITH TOKEN
export interface GetUserWithToken {
    errors: Error | null;
    verifyUser: {
        ok: boolean;
        loginToken: string;
        user: User;
    };
}
export const GET_USER_WITH_TOKEN = gql`
    mutation VerifyUser($token: String!) {
        verifyUser(token: $token) {
            ok
            loginToken
            user {
                id
                username
                name
                email
                groups
                firstName
                lastName
            }
        }
    }
`;

export interface VerifyUser {
    errors: Error | null;
    verifyUser: {
        loginToken: string;
        ok: boolean;
    };
}

export const VERIFY_USER = gql`
    mutation VerifyUser($token: String!) {
        verifyUser(token: $token) {
            ok
            loginToken
        }
    }
`;

export const ALL_USERS = gql`
    query AllUsers {
        allUsers {
            edges {
                node {
                    id
                    username
                    firstName
                    lastName
                    email
                    groups
                }
            }
        }
    }
`;

const userGql = {
    LOGIN_USER,
    VERIFY_USER,
    ALL_USERS,
};

export default userGql;
