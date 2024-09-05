import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import CircularProgressBar from "../components/CircularProgressBar";

const MovieDetail = () => {
  return (
    <div className="relative overflow-hidden text-white">
      <img
        className="absolute inset-0 brightness-[0.2]"
        src="https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"
      />

      {/* Realative để tăng z-index, không bị cùng z-index với absolute */}
      <div className="relative mx-auto flex max-w-screen-lg gap-6 px-6 py-8">
        <div className="flex-1">
          <img
            className=""
            src="https://image.tmdb.org/t/p/original/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
          />
        </div>

        <div className="flex-[2]">
          <p className="mb-2 text-lg font-bold lg:text-2xl">Title</p>

          <div className="flex items-center gap-4">
            <div className="mb-1 inline-block border border-gray-400 p-1 text-[1vw] text-gray-400">
              PG13
            </div>
            <p>Release date</p>
            <p>Type</p>
          </div>

          <div className="mt-4 flex items-center gap-[6vw]">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                voteAverage={8}
                size={3.5}
                strokeWidth={0.4}
              />
              <p>Rating</p>
            </div>
            <button className="text-10 mr-2 rounded bg-white px-2 py-1 text-black lg:text-lg">
              <FontAwesomeIcon className="mr-2" icon={faPlay} />
              Trailer
            </button>
          </div>

          <div className="mt-4">
            <p className="mb-2 text-[1.5vw] font-bold">Overview</p>
            <p className="text-[1.1vw]">
              aswertiwotioerujtioterjl;ks iopteurtopeuretoi
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <div>
              <p className="text-[1.5vw] font-bold">Director</p>
              <p className="text-[1.0vw]">ACWERWEREW</p>
            </div>
            <div>
              <p className="text-[1.5vw] font-bold">Writer</p>
              <p className="text-[1.0vw]">ACWERWEREW</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
