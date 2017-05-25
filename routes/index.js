var moviesJSON = require('../movies.json');

// Home Route
exports.home = function(req, res) {

	var movies = moviesJSON.movies;

	res.render('home', {
		movies : movies
	});
};

// Movie-single route
exports.movie_single = function(req, res) {
	var film_selection = req.params.film_selection;

	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (film_selection >= 1 && film_selection <= 8) {

		var movie = movies[film_selection - 1];

		var title = movie.title;

    var video_title = movie.video_title;

		var main_characters = movie.main_characters;

		res.render('movie_single', {
			movies : movies,
			movie : movie,
			title : title,
      video_title : video_title,
			main_characters : main_characters
		});

	} else {
		res.render('notFound', {
			movies : movies,
			title : "Oops, this page doesn't exist"
		});
	}

};

// Route for all other page requests
exports.notFound = function(req, res) {
	var movies = moviesJSON.movies;
	res.render('notFound', {
		movies : movies,
		title : "Oops, this page doesn't exist"
	});
};

exports.about = function(req, res) {
	res.render('about', {
		message : "About Us"
	});
};

exports.contact = function(req, res) {
	res.render('contact', {
		message : "Contact Us"
	});
};

exports.login = function(req, res) {
	res.render('login', {
		message : "Log In Page"
	});
};

exports.purchase = function(req, res) {
	res.render('purchase', {
		message : "Purchase"
	});
};
