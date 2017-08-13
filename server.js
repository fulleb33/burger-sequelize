var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");
var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 3306;

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/burger-routes.js")(app);

db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("Listening on PORT " + PORT);
	});
});