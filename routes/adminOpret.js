const db = require("../config/mysql")();
module.exports = function(app) {

  app.get("/adminOpret", (req, res) => {
    res.render("adminOpret");
  });


  app.post("/adminOpret", (req, res, next) => {
    db.query(`INSERT INTO arrangementer (title, tid, dato, varighed, sted, pris, info) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        req.fields.title,
        req.fields.tid,
        req.fields.dato,
        req.fields.varighed,
        req.fields.sted,
        req.fields.pris,
        req.fields.info
      ],
      (err, results) => {
        if (err) {
          res.send("");
          console.log("fejl:" + err);
        } else {
          res.redirect("/adminIndex");
          // data indsat korrekt
        }
      }
    );
  });
};
