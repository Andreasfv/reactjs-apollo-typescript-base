import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApolloConsumer, gql, useQuery } from "@apollo/client";

const CATEGORIES = gql`
    {
        allCategories {
            id
            name
        }
    }
`;

//############TYPES############
type category = {
    name: string;
    id: string;
};

type queryResult = {
    allCategories: [category];
};

interface Props {}
//##############################

const FetchCategories: React.FC<Props> = () => {
    const { loading, error, data } = useQuery<queryResult>(CATEGORIES);

    if (loading) return <p> Loadin...</p>;
    if (error) return <p>Error :(</p>;
    if (data == undefined) return <p>No data found!</p>;

    let iterated = data.allCategories.map((cat: category) => (
        <div key={cat.id}>
            name: {cat.name}, id: {cat.id}
        </div>
    ));
    return <div>{iterated}</div>;
};

function App() {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <input ref={inputRef} />
                <FetchCategories />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
