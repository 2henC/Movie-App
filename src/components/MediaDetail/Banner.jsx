import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "@components/CircularProgressBar";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { groupBy } from "lodash";

const Banner = ({ mediaInfo }) => {
  // Lấy ra certification từ release_dates
  const certification = (
    (mediaInfo.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;

  // Lọc ra các crew có job là Director, Writer, Screenplay
  const crews = (mediaInfo.credits?.crew || [])
    .filter((crew) => ["Director", "Writer", "Screenplay"].includes(crew.job))
    .map((crew) => ({ id: crew.id, name: crew.name, job: crew.job }));

  // Gom nhóm các crew theo job
  const groupCrews = groupBy(crews, "job");

  return (
    <div className="relative overflow-hidden text-white shadow-sm shadow-slate-800">
      <img
        className="absolute inset-0 w-full brightness-[0.2]"
        src={`https://image.tmdb.org/t/p/original${mediaInfo.backdrop_path}`}
      />

      {/* Realative để tăng z-index, không bị cùng z-index với absolute */}
      <div className="relative mx-auto flex max-w-screen-lg gap-6 px-6 py-8">
        <div className="flex-1">
          <img
            className=""
            src={`https://image.tmdb.org/t/p/original/${mediaInfo.poster_path}`}
          />
        </div>

        <div className="flex-[2]">
          <p className="mb-2 text-lg font-bold lg:text-2xl">
            {mediaInfo.title}
          </p>

          <div className="flex items-center gap-4">
            <div className="mb-1 inline-block border border-gray-400 px-1 text-[1vw] text-gray-400">
              {certification}
            </div>
            <p>{mediaInfo.release_date}</p>
            <p>
              {/* Chuyển từ một array thành một chuỗi bằng cách sử dụng .join(" ") */}
              {(mediaInfo.genres || []).map((genre) => genre.name).join(", ")}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-[6vw]">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                voteAverage={mediaInfo.vote_average || 0}
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
            <p className="text-[1.1vw]">{mediaInfo.overview}</p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {/* Dùng Object.keys để lấy ra các key của object vào tạo thành một Array */}
            {/* ['Director', 'Writer', 'Screenplay'].map .... */}
            {/* key = 'Director' */}
            {Object.keys(groupCrews).map((job) => (
              <div key={job}>
                <p className="text-[1.5vw] font-bold">{job}</p>
                {/* groupCrews[Director] */}
                <p>{groupCrews[job].map((crew) => crew.name).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  mediaInfo: PropTypes.object,
};
export default Banner;
