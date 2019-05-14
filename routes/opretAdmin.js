const db = require("../config/mysql")();
const bcrypt = require("bcrypt");

module.exports = function(app) {

  app.get("/opretadmin", (req, res) => {
    res.render("opretAdmin");
  });


  app.post("/opret/admin", (req, res, next) => {
    let salt = bcrypt.genSaltSync(10);
    let hashPassword = bcrypt.hashSync(req.fields.opretPassword, salt);
    db.query(`INSERT INTO adminlogin (username, password) VALUES (?, ?)`,
      [req.fields.opretUsername, hashPassword],
      (err, result) => {
        if (err) {
          res.send("");
          console.log("fejl:" + err);
        } else {
          //Data indsat korrekt//
          res.render("adminOpret");
        }
      }
    );
  });
};
