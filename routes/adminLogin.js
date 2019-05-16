const db = require("../config/mysql")();
const bcrypt = require("bcrypt");
module.exports = function(app) {

  app.get("/adminLogin", (req, res) => {
    if (req.query.status && req.query.status === "badcredentials") {
      res.locals.status = "ugyldigt brugernavn eller adgangskode";
      res.render("adminLogin");
    } else {
      res.render("adminLogin");
    }
  });

  app.post("/adminLogin", (req, res, next) => {
    db.query("SELECT id, password FROM adminlogin WHERE username = ?",
      [req.fields.username],
      (err, results) => {
        if (err) {
          res.send("");
          console.log("fejl:" + err);
        } else if (results.length !== 1) {
          res.redirect("/login?status=badcredentials");
        } else {
          if (bcrypt.compareSync(req.fields.password, results[0].password)) {
            req.session.user_id = results[0].id;
            res.redirect("/adminIndex");
          } else {
            res.redirect("/login?status=badcredentials");
          }
        }
      }
    );
  });
};
