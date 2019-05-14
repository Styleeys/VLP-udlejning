const db = require("../config/mysql")();
module.exports = function(app) {

  app.get("/", (req, res, next) => {
    // console.log('session user.id er ' + req.session.user_id); //Chek id
    let sql = `SELECT
        arrangementer.id,
        arrangementer.title,
        arrangementer.tid,
        arrangementer.dato,
        arrangementer.varighed,
        arrangementer.sted,
        arrangementer.pris,
        arrangementer.info
        FROM
        vlp_udlejning.arrangementer`;
    db.query(sql, [req.session.user_id], function(err, results) {
      if (err) {
        res.send("");
        console.log("fejl:" + err);
      } else {
        res.render("annoncer", { results: results });
      }
    });
  });
};
