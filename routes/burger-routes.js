var db = require("../models");

module.exports = function(app) {

app.get("/", function(req,res) {

	db.Burger.findAll().then(function(results) {
		var hbsObject = {
			burgers: results
		}
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

app.post("/", function(req, res) {

	db.Burger.create({
		burger_name: req.body.name,
		devoured: req.body.ate
	}).then(function() {
	  	res.redirect("/");
	  });
});

app.post("/:id", function(req,res) {

	db.Burger.update({
		devoured: req.body.ate
	}, {
		where: { id: req.params.id }}).then(function() {
			res.redirect("/");
		});
});

}