const express = require('express');
const app = express();

const ejs = require('ejs');
app.set('view engine', 'ejs');

const formadable = require('express-formidable');
app.use(formadable());

app.use(express.static('./public'));

require('dotenv').config()
require('./config/session')(app);


let protectedRoutes = [
    '/adminOpret'
];

app.use(protectedRoutes, (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/adminLogin');
        return;
    } else {
        next();
    }
});

require('./routes/forside')(app);
require('./routes/annoncer')(app);
require('./routes/adminLogin')(app);
require('./routes/adminOpret')(app);
require('./routes/adminRediger')(app);
require('./routes/opretAdmin')(app);
require('./routes/enkelSide')(app);
require('./routes/event')(app);
require('./routes/adminIndex')(app);
require('./routes/rediger')(app);
require('./routes/nyheder')(app);
require('./routes/reserver')(app);
require('./routes/kontakt')(app);


// ========================ROUTES========================================
app.get('/test', (req, res, next) => {
    res.send('hej med dig');
});

// ========================ROUTES-END========================================

app.listen(3000, () => {
    console.log('http://localhost:3000');
})