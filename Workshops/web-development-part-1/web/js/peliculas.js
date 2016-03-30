$(document).ready(function() {
	var filmBuilder = {
		build: function() {
			for (var i in FILMS) {
				var film = FILMS[i];
				htmlFilm = this.buildHtmlFilm(film);
				$('.films').append(htmlFilm);
			}
		},

		buildHtmlFilm: function(film) {
			var html = '<div class="film">';
			console.log(film);
			html = html.concat('<img src="'+film.Poster+'"/>');
			html = html.concat('<div class="data">');
			html = html.concat('<div class="title">'+film.Title+'</div>');
			html = html.concat('<div class="genre">'+film.Genre+'</div>');
			html = html.concat('<div class="year">'+film.Year+'</div>');
			html.concat('</div>');
			return html;
		}
	}

	filmBuilder.build();
});