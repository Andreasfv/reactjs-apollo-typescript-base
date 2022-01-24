import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../themes/light.theme";
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
            <ThemeProvider theme={theme}>
                <AuthRouter />
            </ThemeProvider>
        </ApolloProvider>
    );
}
