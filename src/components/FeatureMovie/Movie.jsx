import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageComponent from "@libs//Image";
import PropTypes from "prop-types";

const Movie = (props) => {
  // title, backdrop_path, release_date, release_date, overview

  // Destructuring Asignment
  const {
    data: { title, backdrop_path, release_date, overview },
  } = props;

  return (
    <>
      <ImageComponent
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        className="aspect-video overflow-hidden brightness-50"
        width={1467}
        height={825}
      />
      <div className="absolute left-8 top-[20%] w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{title}</p>
        <div>
          <div className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </div>
          <div className="text-[2.4vw] sm:text-[1.2vw]">{release_date}</div>
        </div>

        <div className="mt-3 hidden text-[1.2vw] sm:block">
          <p className="mb-2 font-bold">Overview</p>
          <p>{overview}</p>
        </div>

        <div className="mt-4">
          <button className="text-10 mr-2 rounded bg-white px-4 py-2 text-black lg:text-lg">
            <FontAwesomeIcon icon={faPlay} />
            Trailer
          </button>
          <button className="text-10 rounded bg-gray-300/35 px-4 py-2 text-black lg:text-lg">
            View Detail
          </button>
        </div>
      </div>
    </>
  );
};

Movie.propTypes = {
  data: PropTypes.object,
};

export default Movie;
