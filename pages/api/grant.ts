import * as grant from "grant";
import oauthConfig from "../../config";
const oauth = grant.vercel({
  config: oauthConfig,
  session: { secret: "grant" },
});

export default async (req, res) => {
  let { response } = await oauth(req, res);
  if (response) {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end(JSON.stringify(response, null, 2));
  }
};
