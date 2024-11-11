function printMovies(arr) {
    let movies = [];

    for (let command of arr) {

        if (command.includes('addMovie')) {
            let tokens = command.split('addMovie ');
            let movieName = tokens[1];
            let movieObj = {
                name: movieName
            };
            movies.push(movieObj);

        } else if (command.includes('directedBy')) {
            let [movieName, directorName] = command.split(' directedBy ');
            let foundMovie = movies.find(movie => movie.name === movieName);

            if (foundMovie) {
                foundMovie.director = directorName;
            }

        } else if (command.includes('onDate')) {
            let [movieName, movieDate] = command.split(' onDate ');
            let foundMovie = movies.find(movie => movie.name === movieName);

            if (foundMovie) {
                foundMovie.date = movieDate;
            }
        }
    }

    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie))
        }
    }
}
printMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])