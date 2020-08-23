import React from "react";
import GraphiQL from "graphiql";
import { useLocalStorage, useSearchParam } from "react-use";

import fetch from "isomorphic-fetch";
import Topbar from "./components/Topbar";

function graphQLFetcher(graphQLParams, token) {
  return fetch("/graphql", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify(graphQLParams),
  }).then((response) => response.json());
}

const App = () => {
  const accessTokenQuery = useSearchParam("access_token");
  const [token, setToken, removeToken] = useLocalStorage("access_token", "");

  React.useEffect(() => {
    if (accessTokenQuery) {
      setToken(accessTokenQuery);
      history.pushState({}, "", location.pathname);
    }
  }, [setToken, accessTokenQuery]);

  const fetcher = React.useCallback((params) => graphQLFetcher(params, token), [
    token,
  ]);

  const handleTokenChange = React.useCallback(
    (val) => {
      setToken(val);
    },
    [setToken]
  );

  return (
    <div>
      <Topbar token={token} onTokenChange={handleTokenChange} />
      <GraphiQL fetcher={fetcher}>
        <GraphiQL.Logo>Ruby China GraphQL API</GraphiQL.Logo>
        <button>hi</button>
      </GraphiQL>
    </div>
  );
};

export default App;
