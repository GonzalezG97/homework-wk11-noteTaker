// Dependencies
const express = require("express");
const htmlRoutes =require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// Initialize express app
const app = express();
const PORT = process.env.PORT || 8080;

// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Require routes files
app.use('/api',apiRoutes);
app.use('/', htmlRoutes);

// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  