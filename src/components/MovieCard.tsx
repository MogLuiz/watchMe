// Components
import { Star, Clock } from "react-feather";

// Styles
import "../styles/movie-card.scss";

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  poster,
  rating,
  runtime,
  title,
}) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div className="movie-card">
      <img src={poster} alt={title} />

      <div>
        <div className="movie-info">
          <span>{title}</span>
          <div className="meta">
            <div>
              <Star /> {rating}
            </div>

            <div>
              <Clock /> {runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
