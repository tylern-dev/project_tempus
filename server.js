const path = require('path');
const express = require('express');

const exphbs = require('express-handlebars');
const app = express();
const PORT = 8080;



//handlebars engine stuff
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//static files css and js
app.use(express.static(path.join(__dirname,'app/public')))

//link to files holding the routes 
require(path.join(__dirname, '/routing/apiRoutes.js'))(app);
require(path.join(__dirname, '/routing/htmlRoutes.js'))(app);

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
})
