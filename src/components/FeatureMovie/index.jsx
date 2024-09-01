import PaginaIndicator from "./PaginaIndicator";
import Movie from "./Movie";

const FeatureMovie = () => {
  return (
    <div>
      <div className="relative text-white">
        <Movie />
        <PaginaIndicator />
      </div>
    </div>
  );
};
export default FeatureMovie;
