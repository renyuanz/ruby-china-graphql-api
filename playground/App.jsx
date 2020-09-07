import React from "react";
import GraphiQL from "graphiql";
import GraphiQLExplorer from "graphiql-explorer";
import { buildClientSchema, getIntrospectionQuery, parse } from "graphql";
import { useLocalStorage, useSearchParam } from "react-use";

import fetch from "isomorphic-fetch";
import Topbar from "./components/Topbar";

const { NODE_ENV } = process.env;
const PUBLIC_URL = NODE_ENV === "development" ? "http://localhost:5000" : "";

function graphQLFetcher(graphQLParams, token) {
  return fetch(`${PUBLIC_URL}/graphql`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify(graphQLParams),
  }).then((response) => response.json());
}

const App = () => {
  const graphiqlRef = React.useRef(null);
  const [explorerIsOpen, setExplorerIsOpen] = React.useState(false);
  const [schema, setSchema] = React.useState(null);
  const [query, setQuery] = React.useState(null);
  const accessTokenQuery = useSearchParam("access_token");
  const [token, setToken, removeToken] = useLocalStorage("access_token", "");

  React.useEffect(() => {
    fetcher({
      query: getIntrospectionQuery(),
    }).then((result) => {
      setSchema(buildClientSchema(result.data));
    });
  }, []);

  React.useEffect(() => {
    if (accessTokenQuery) {
      setToken(accessTokenQuery);
      history.pushState({}, "", location.pathname);
    }
  }, [setToken, accessTokenQuery]);

  const fetcher = React.useCallback((params) => graphQLFetcher(params, token), [
    token,
  ]);

  const handleToggleExplorer = React.useCallback(() => {
    setExplorerIsOpen(!explorerIsOpen);
  }, [setExplorerIsOpen, explorerIsOpen]);

  const handleSetQuery = React.useCallback(
    (query) => {
      setQuery(query);
    },
    [query, setQuery]
  );

  const handleTokenChange = React.useCallback(
    (val) => {
      setToken(val);
    },
    [setToken]
  );

  return (
    <div className="graphiql-container">
      <GraphiQLExplorer
        schema={schema}
        query={query}
        onEdit={handleSetQuery}
        onRunOperation={(operationName) =>
          graphiqlRef.current.handleRunQuery(operationName)
        }
        explorerIsOpen={explorerIsOpen}
        onToggleExplorer={handleToggleExplorer}
      />
      <GraphiQL ref={graphiqlRef} query={query} fetcher={fetcher}>
        <GraphiQL.Logo>Ruby China GraphQL API</GraphiQL.Logo>

        <GraphiQL.Toolbar>
          <GraphiQL.Button
            onClick={() => graphiqlRef.current.handlePrettifyQuery()}
            label="Prettify"
            title="Prettify Query (Shift-Ctrl-P)"
          />
          <GraphiQL.Button
            onClick={() => graphiqlRef.current.handleToggleHistory()}
            label="History"
            title="Show History"
          />
          <GraphiQL.Button
            onClick={handleToggleExplorer}
            label="Explorer"
            title="Toggle Explorer"
          />

          <Topbar token={token} onTokenChange={handleTokenChange} />
        </GraphiQL.Toolbar>
      </GraphiQL>
    </div>
  );
};

export default App;
