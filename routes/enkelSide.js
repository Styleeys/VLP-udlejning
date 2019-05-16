const db = require("../config/mysql")();
module.exports = function(app) {
  app.get("/enkelside", (req, res) => {
    db.query(`SELECT * FROM vlp_udlejning.arrangementer WHERE title LIKE ?`,
      [`%${req.query.search}%`],
      (err, results) => {
        if (err) {
          res.send("");
          console.log("fejl:" + err);
        } else {
          res.render("enkelSide", { results: results });
        }
      }
    );
  });
};
