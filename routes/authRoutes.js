const passport = require("passport");

module.exports = (authRoutes) => {
  authRoutes.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  authRoutes.get("/auth/google/callback", passport.authenticate("google"));

  authRoutes.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  authRoutes.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
};
