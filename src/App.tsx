// Hooks
import { useEffect, useState } from "react";

// Components
import { Button, Content, SideBar } from "./components";

// Services
import { api } from "./services/api";

// Types
import { GenreResponseProps, MovieProps } from "./shared/types";

// Styles
import "./styles/global.scss";
import "./styles/sidebar.scss";
import "./styles/content.scss";

const App: React.FC = () => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <nav className="sidebar">
        <SideBar
          genres={genres}
          handleClickButton={handleClickButton}
          selectedGenreId={selectedGenreId}
        />
      </nav>

      <div className="container">
        <Content title={selectedGenre.title} movies={movies} />
      </div>
    </div>
  );
};

export default App;
