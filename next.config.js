module.exports = {
  async rewrites() {
    return [
      {
        source: "/connect/(.*)",
        destination: "/api/grant",
      },
    ];
  },
};
