require("dotenv").config();

import oauthPlugin from "fastify-oauth2";
import path from "path";
import fastifyStatic from "fastify-static";
import server from "./app";
import apolloServer from "./apollo";

const {
  PUBLIC_URL = "",
  RUBYCN_OAUTH_CLIENT_ID = "",
  RUBYCN_OAUTH_CLIENT_SECRET = "",
} = process.env;

server.register(apolloServer.createHandler());

server.register(fastifyStatic, {
  root: path.join(__dirname, "public"),
});

server.register(oauthPlugin, {
  name: "rubychinaOauth2",
  credentials: {
    client: {
      id: RUBYCN_OAUTH_CLIENT_ID,
      secret: RUBYCN_OAUTH_CLIENT_SECRET,
    },
    auth: {
      authorizeHost: "https://ruby-china.org",
      authorizePath: "/oauth/authorize",
      tokenHost: "https://ruby-china.org",
      tokenPath: "/oauth/token",
    },
  },
  scope: ["all"],
  // register a fastify url to start the redirect flow
  startRedirectPath: "/login/rubycn",
  // facebook redirect here after the user login
  callbackUri: PUBLIC_URL + "/login/rubycn/callback",
});

server.get("/login/rubycn/callback", async function (request, reply) {
  const token = await (this as any).rubychinaOauth2.getAccessTokenFromAuthorizationCodeFlow(
    request
  );

  console.log(token);

  // if later you need to refresh the token you can use
  // const newToken = await this.getNewAccessTokenUsingRefreshToken(token.refresh_token)

  reply.redirect("/?access_token=" + token.access_token);
});

server.listen(5000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
