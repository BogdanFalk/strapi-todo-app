module.exports = {
  timeout: 100,
  gzip: {
    enabled: true,
    options: {
      br: false,
    },
  },
  load: {
    before: ["responseTime", "logger", "cors", "responses", "gzip"],
    order: [
      "Define the middlewares' load order by putting their name in this array is the right order",
    ],
    after: ["parser", "router"],
  },
  settings: {
    public: {
      path: "./public",
      maxAge: 60000,
    },
  },
};