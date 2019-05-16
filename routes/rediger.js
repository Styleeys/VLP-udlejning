const db = require("../config/mysql")();
module.exports = function(app) {
  
  app.get("/adminRediger/:id", (req, res, next) => {
    let sql = `SELECT
		    arrangementer.title,
        arrangementer.tid,
		    arrangementer.dato,
        arrangementer.varighed,
        arrangementer.sted,
        arrangementer.pris,
        arrangementer.info
        FROM
        arrangementer
        WHERE
        id = ?`;
    db.query(sql, [req.params.id], function(err, results) {
      if (err) {
        res.send("");
        console.log("fejl:" + err);
      } else {
        console.info(results);
        res.render("rediger", { result: results[0] });
      }
    });
  });

  app.post("/adminRediger/:id", (req, res) => {
    let sql = `UPDATE arrangementer SET title = ?, tid = ?, dato = ?, varighed = ?, sted = ?, pris = ?, info = ? WHERE id = ?`;
    db.query(
      sql,
      [
        req.fields.title,
        req.fields.tid,
        req.fields.dato,
        req.fields.varighed,
        req.fields.sted,
        req.fields.pris,
        req.fields.info,
        req.params.id
      ],
      (err, results) => {
        if (err) {
          res.send("");
          console.log("fejl:" + err);
        } else {
          res.redirect("/");
        }
      }
    );
  });
};
