$(document).ready(function() {
	var filmBuilder = {
		films: FILMS,

		show: function() {
			for (var i in this.films) {
				var film = FILMS[i];
				htmlFilm = this.buildHtmlFilm(film);
				$('.films').append(htmlFilm);
			}
		},

		buildHtmlFilm: function(film) {
			var html = '<div class="film">';
			html = html.concat('<img src="'+film.Poster+'"/>');
			html = html.concat('<div class="data">');
			html = html.concat('<div class="title">'+film.Title+'</div>');
			html = html.concat('<div class="genre">'+film.Genre+'</div>');
			html = html.concat('<div class="year">'+film.Year+'</div>');
			html.concat('</div>');
			return html;
		},

		clear: function() {
			$('.films').empty();
		},

		sortFilms: function(field) {
			this.films.sort(function(film1,film2) {
				if (field == 'Year') {
					return film1[field] - film2[field];
				} else {
					if (film1[field] < film2[field]) return -1;
					if (film1[field] > film2[field]) return 1;
					return 0;
				}
				
			});
		}
	}

	filmBuilder.show();

	$('#filmsOrder').change(function() {
		filmBuilder.sortFilms(this.value);
		filmBuilder.clear();
		filmBuilder.show();
	})
});