// Packages
import React from "react";

// Components
import { MovieCard } from ".";

// Types
import { MovieProps } from "../shared/types";

// Styles
import "../styles/content.scss";

interface IContentProps {
  title: string;
  movies: MovieProps[];
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
