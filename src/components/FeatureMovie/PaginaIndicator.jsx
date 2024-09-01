import PropTypes from "prop-types";

const PaginaIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  // Sử dụng Distucturing Assignment để lấy ra movies từ props
  return (
    <div className="absolute bottom-[10%] right-8">
      <ul className="flex gap-1">
        {movies.map((movie) => (
          <li
            onClick={() => setActiveMovieId(movie.id)}
            key={movie.id}
            className={`h-2 w-14 cursor-pointer ${movie.id === activeMovieId ? "bg-slate-100" : "bg-slate-600"}`}
          ></li>
        ))}
        {/* <li className="h-2 w-14 cursor-pointer bg-slate-100"></li>
        <li className="h-2 w-14 cursor-pointer bg-slate-600"></li>
        <li className="h-2 w-14 cursor-pointer bg-slate-600"></li>
        <li className="h-2 w-14 cursor-pointer bg-slate-600"></li> */}
      </ul>
    </div>
  );
};

PaginaIndicator.propTypes = {
  movies: PropTypes.array,
  activeMovieId: PropTypes.number,
  setActiveMovieId: PropTypes.func,
};

export default PaginaIndicator;
