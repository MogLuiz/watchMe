// Packages
import React from "react";

// Components
import { MovieCard } from ".";

interface IMovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
interface IContentProps {
  title: string;
  movies: IMovieProps[];
}

const Content: React.FC<IContentProps> = ({ title, movies }) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <>
      <header>
        <span className="category">
          Categoria:<span> {title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
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
    </>
  );
};

export default Content;
