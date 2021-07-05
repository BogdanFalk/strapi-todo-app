module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 3002),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "d7fa642e6bc10705567a99ecc724afe1"),
    },
  },
});
