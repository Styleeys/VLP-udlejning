const db = require("../config/mysql")();
module.exports = function(app) {


    // app.get('/reserver', (req, res) => {
    //     res.render('reserver');
    // });

    app.get("/reserver/:id", (req, res, next) => {
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
            WHERE
            id = ?`;
        db.query(sql, [req.params.id], function(err, results) {
          if (err) {
            res.send("");
            console.log("fejl:" + err);
          } else {
            res.render("reserver", { result: results[0] });
          }
        });
      });

      app.post('/book', (req, res) => {
          let sql = `INSERT INTO reservationer (navn, nummer, email) VALUES (?, ?)`;
        db.query(sql, [req.fields.navn, req.fields.nummer, req.fields.email], (err, result) => {
            if(err) {
                res.send('');
                console.log("fejl:" + err);
            } else {
                res.send('done!');
            }
        });
      });
}