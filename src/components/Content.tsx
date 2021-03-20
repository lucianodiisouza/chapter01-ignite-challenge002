import MovieCard from "./MovieCard";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

type DefaultProps = {
  movies: MovieProps[];
};

const Content = ({ movies }: DefaultProps) => {
  return (
    <main>
      <div className="movies-list">
        {movies &&
          movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
      </div>
    </main>
  );
};

export default Content;
