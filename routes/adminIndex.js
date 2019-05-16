const db = require("../config/mysql")();
module.exports = function(app) {

  app.get("/adminIndex", (req, res) => {
    let sql = `SELECT
        arrangementer.id,
        arrangementer.title
        FROM
        vlp_udlejning.arrangementer`;
    db.query(sql, [req.session.user_id], function(err, results) {
      if (err) {
        res.send("");
        console.log("fejl:" + err);
      } else {
        res.render("adminIndex", { results: results });
      }
    });
  });
};
