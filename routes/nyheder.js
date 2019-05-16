const db = require("../config/mysql")();
module.exports = function(app) {
  app.get("/nyheder", (req, res, next) => {
    let sql = `SELECT
		    arrangementer.title,
        arrangementer.tid,
		    arrangementer.dato,
        arrangementer.varighed,
        arrangementer.sted,
        arrangementer.pris,
        arrangementer.info
        FROM
        vlp_udlejning.arrangementer
        ORDER BY arrangementer.dato ASC LIMIT 5
        `;
    db.query(sql, [req.params.id], function(err, results) {
      if (err) {
        res.send("");
        console.log("fejl:" + err);
      } else {
        res.render("nyheder", { results: results });
      }
    });
  });
};
