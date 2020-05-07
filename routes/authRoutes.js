const passport = require("passport");

module.exports = (authRoutes) => {
  authRoutes.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  authRoutes.get(
    "/auth/google/callback", 
    passport.authenticate("google"), 
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  authRoutes.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  authRoutes.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
