require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');

let user = require('./controllers/usercontroller');
let journal = require('./controllers/journalcontroller');


sequelize.sync();
// sequelize.sync({force: true});
app.use(require('./middleware/headers'));

app.use(express.json());


// ***End Point Reference (test/kurt) ***
// app.use("/test", function(req, res) {
//     res.send("This is a message from the test endpoint on the server!");
// })
// app.use("/kurt", function(req, res) {
//     res.send("My name is Kurt I am blank years old");
// })
// ** Have endpoint of journal/practice **
// ** send a response from thast end point (This is a practice route) **

// app.use('/journal', require('./controllers/journalcontroller'));

/* ******************
  * Exposed Route *
*********************/
app.use('/user', user);


/* ******************
  * Protected Route *
*********************/
// app.use(require('./middleware/validate-session'));
app.use('/journal', journal);

app.listen(3000, function () {
    console.log("App is listening on port 3000");
});


//localhost:3000

//localhost:3000/test
// let calc = require("./controllers/calculatorcontroller");
// app.use("/calculator", calc);