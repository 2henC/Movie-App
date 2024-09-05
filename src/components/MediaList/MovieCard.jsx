import CircularProgressBar from "../CircularProgressBar";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {
    data: {
      title,
      name,
      release_date,
      first_air_date,
      poster_path,
      vote_average,
      media_type,
    },
  } = props;

  return (
    <div className="relative cursor-pointer rounded-lg border-slate-800">
      {media_type === "tv" && (
        <p className="absolute right-1 top-1 rounded bg-black px-2 text-white opacity-70 shadow-md">
          TV Show
        </p>
      )}
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        className="rounded-lg"
      />

      <div className="relative -top-[3.5vw] px-4 text-sm sm:-top-[1.2vw] sm:text-base">
        <CircularProgressBar voteAverage={vote_average} />
        <p className="font-bold">{title || name}</p>
        <p className="text-slate-300">{release_date || first_air_date}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  data: PropTypes.object,
};

export default MovieCard;
