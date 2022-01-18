import React from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
} from "@apollo/client";
import client from "../apollo-setup";
import AuthRouter from "./AuthRouter";

export default function Root() {
    return (
        <ApolloProvider client={client}>
            <AuthRouter />
        </ApolloProvider>
    );
}
