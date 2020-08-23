import { OAuth2Namespace } from "fastify-oauth2";

declare module "fastify" {
  interface FastifyInstance {
    rubychinaOauth2: OAuth2Namespace;
  }
}
