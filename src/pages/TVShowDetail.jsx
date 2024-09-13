import { useParams } from "react-router-dom";

import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RealatedMediaList from "@components/MediaDetail/RealatedMediaList";
import Loading from "@libs//Loađing";
import MovieInformation from "@components/MediaDetail/MovieInformation";
import useFetch from "@hooks//useFetch";

const TVShowDetail = () => {
  const params = useParams();
  const { id } = params;

  // Sử dụng custom hook với url, method = "GET", headers mặc định trong useFetch
  const { data: TVShowInfo, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits`,
  });

  console.log(TVShowInfo);

  // Lấy các bộ phim liên quan/đề xuất
  const { data: relativeTVShowResponse, isLoading: isRelativeTVShow } =
    useFetch({
      url: `/tv/${id}/recommendations`,
    });

  // data trả về là một Object. Cần chuyển sang Array để dùng map
  const relativeTVShow = relativeTVShowResponse.results || [];

  const certification = (TVShowInfo.content_ratings?.results || []).find(
    (result) => result.iso_3166_1 === "US",
  )?.rating;

  const crews = (TVShowInfo.aggregate_credits?.crew || [])
    .filter((crew) => {
      const jobs = (crew.jobs || []).map((j) => j.job);
      return ["Director", "Writer"].some((job) => jobs.find((j) => j === job));
    })
    .map((crew) => ({ id: crew.id, job: crew.jobs[0].job, name: crew.name }));

  // Kiểm tra loading. Đợi load hết dữ liệu mới hiện ra.
  if (isLoading && isRelativeTVShow) {
    return <Loading />;
  }

  console.log({ TVShowInfo });

  return (
    <div>
      {/* Truyền moiveInfo vào component Banner */}
      <Banner
        title={TVShowInfo.name}
        releaseDate={TVShowInfo.first_air_date}
        overview={TVShowInfo.overview}
        voteAverage={TVShowInfo.vote_average}
        backdropPath={TVShowInfo.backdrop_path}
        posterPath={TVShowInfo.poster_path}
        genres={TVShowInfo.genres}
        certification={certification}
        crews={crews}
      />
      <div className="bg-black text-[1vw] text-white">
        <div className="mx-auto flex max-w-screen-lg gap-6 px-6 py-6">
          <div className="flex-[2]">
            <ActorList
              actors={(TVShowInfo.aggregate_credits?.cast || []).map(
                (cast) => ({
                  ...cast,
                  character: cast.roles[0]?.character,
                  episode_count: cast.roles[0]?.episode_count,
                }),
              )}
            />
            <RealatedMediaList
              mediaList={relativeTVShow}
              isLoading={isRelativeTVShow}
            />
          </div>
          <div className="mb-4 flex-1">
            <MovieInformation movieInfo={TVShowInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TVShowDetail;
