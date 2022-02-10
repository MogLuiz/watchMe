// Packages
import React from "react";

// Components
import { Button } from ".";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}
interface ISideBarProps {
  genres: GenreResponseProps[];
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
}

const SideBar: React.FC<ISideBarProps> = ({
  genres,
  handleClickButton,
  selectedGenreId,
}) => {
  return (
    <>
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </>
  );
};

export default SideBar;
