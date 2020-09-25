import React from "react";
import dynamic from "next/dynamic";

import { useLocalStorage, useSearchParam } from "react-use";

const GraphiQL = dynamic(() => import("graphiql"), {
  ssr: false,
});
const Topbar = dynamic(() => import("../components/Topbar"), {
  ssr: false,
});

function graphQLFetcher(graphQLParams, token) {
  return fetch(`/api/graphql`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify(graphQLParams),
  }).then((response) => response.json());
}

export default function Home() {
  const accessTokenQuery = useSearchParam("access_token");
  const [token, setToken, removeToken] = useLocalStorage("access_token", "");

  React.useEffect(() => {
    if (accessTokenQuery) {
      setToken(accessTokenQuery);
      history.pushState({}, "", location.pathname);
    }
  }, [setToken, accessTokenQuery]);

  const fetcher = (params) => graphQLFetcher(params, token);

  const handleTokenChange = React.useCallback(
    (val) => {
      setToken(val);
    },
    [setToken]
  );

  const defaultQuery = `# Welcome to GraphiQL
#
# GraphiQL is an in-browser tool for writing, validating, and
# testing GraphQL queries.
#
# Type queries into this side of the screen, and you will see intelligent
# typeaheads aware of the current GraphQL type schema and live syntax and
# validation errors highlighted within the text.
#
# GraphQL queries typically start with a "{" character. Lines that start
# with a # are ignored.
#
# An example GraphQL query might look like:
#
#     {
#       field(arg: "value") {
#         subField
#       }
#     }
#
# Keyboard shortcuts:
#
#  Prettify Query:  Shift-Ctrl-P (or press the prettify button above)
#
#     Merge Query:  Shift-Ctrl-M (or press the merge button above)
#
#       Run Query:  Ctrl-Enter (or press the play button above)
#
#   Auto Complete:  Ctrl-Space (or just start typing)
#

# 尝试运行下面这个 Query，会得到社区首页的帖子列表。
{
  topics {
    id
    title
    repliesCount
  }
}
`;

  return (
    <>
      <Topbar token={token} onTokenChange={handleTokenChange} />

      <GraphiQL
        key="graphiql-instance"
        fetcher={fetcher}
        defaultQuery={defaultQuery}
      />
    </>
  );
}
