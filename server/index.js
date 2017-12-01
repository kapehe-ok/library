require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')
    , controller = require("./controllers/controller.js")
    , checkForSession = require('./middlewares/checkforsession.js');
        
const app = express();

app.use(bodyParser.json());
app.use( session({
    secret: "lsdfienvassldkfj",
    resave: false,
    saveUninitialized: false
}))

app.use( checkForSession );

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.post('/api/auth/login', controller.login);
app.post('/api/auth/register', controller.register)
app.post('/api/auth/signout', controller.signout);

app.get('/api/books', controller.getBooks)


const PORT = 3005;
app.listen(PORT, console.log(`Listening on port ${PORT}`))