import { gql } from "@apollo/client";
import User from "../../types/User";
export interface LoginData {
    data: {
        login: {
            ok: boolean;
            user: User | null;
            token: string | null;
        };
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

export const VERIFY_USER = gql`
    mutation VerifyUser($token: String!) {
        verifyUser(token: $token) {
            ok
            token
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
