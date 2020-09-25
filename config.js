module.exports = {
  defaults: {
    origin: process.env.PUBLIC_URL || "http://localhost:3000",
    transport: "querystring",
  },
  homeland: {
    key: process.env.HOMELAND_CLIENT_ID,
    secret: process.env.HOMELAND_CLIENT_SECRET,
    scope: ["all"],
    authorize_url: `${
      process.env.HOMELAND_URL || "https://ruby-china.org"
    }/oauth/authorize`,
    access_url: `${
      process.env.HOMELAND_URL || "https://ruby-china.org"
    }/oauth/token`,
    oauth: 2,
    callback: "/",
  },
};
