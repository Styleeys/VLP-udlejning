const db = require("../config/mysql")();
module.exports = function(app) {
  
  app.get("/adminRediger", (req, res) => {
    let sql = `SELECT
        arrangementer.id,
        arrangementer.title
        FROM
        vlp_udlejning.arrangementer`;
    db.query(sql, [req.fields.id], function(err, results) {
      if (err) {
        res.send("");
        console.log("fejl:" + err);
      } else {
        res.render("adminRediger", { results: results });
      }
    });
  });
};
