import fastify from "fastify";
import pino from "pino";

const server = fastify({
  logger: pino({
    level: "info",
    messageKey: "message",
  }),
});

export default server;
