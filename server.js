// ==========================================================================
// SERVER AND DB NPM PACKAGE DEPENDENCIES
// ==========================================================================
var express = require("express");
var mongoose = require("mongoose");

// ==========================================================================
// WEB SCRAPING PACKAGES
// ==========================================================================
var axios = require("axios");
var cheerio = require("cheerio");

// ==========================================================================
// REQUIRE ALL MODELS
// ==========================================================================
var db = require("./models");

// ==========================================================================
// EXPRESS SERVER INITIALIZATION
// ==========================================================================
var app = express();
var PORT = process.env.PORT || 8080;

// ==========================================================================
// MIDDLEWARE CONFIGURATION
// ==========================================================================

// Parse request body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

// ==========================================================================
// HANDLEBARS SETUP
// ==========================================================================
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// ==========================================================================
// MONGOOSE CONFIGURATION
// ==========================================================================

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// mongoose.connect(MONGODB_URI);

// ==========================================================================
// IMPORT ROUTES
// ==========================================================================
//require("./controllers/apiRoutes")(app);
//require("./controllers/htmlRoutes")(app);

// ==========================================================================
// SERVER STARTUP
// ==========================================================================
app.listen(PORT, function () {
    console.log("==========================================================================");
    console.log("Server listening on: http://localhost:" + PORT);
    console.log("==========================================================================");
});