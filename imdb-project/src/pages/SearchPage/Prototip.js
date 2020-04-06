<div>
            
              <div>
                {movies.results.map(movie => (
                  <div className='containerOfMovies' key = {movie.id}>
                    <p> Name : {movie.Title} </p>
                    <p>Year : {movie.Year}</p>
                    <p>Genre : {movie.Genre} </p>
                    <p>Country : {movie.Country}</p>
                    <img src= {movie.Poster}></img>
                  </div>
                ))}
              </div>
          </div>