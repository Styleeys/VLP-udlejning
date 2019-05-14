module.exports = function(app) {
    app.get('/booking', (req, res) => {
        res.render('booking');
    });
}