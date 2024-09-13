// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay } from "@fortawesome/free-solid-svg-icons";
// import CircularProgressBar from "../components/CircularProgressBar";
import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { groupBy } from "lodash";

import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RealatedMediaList from "@components/MediaDetail/RealatedMediaList";
import Loading from "@libs//Loađing";
import MovieInformation from "@components/MediaDetail/MovieInformation";
import useFetch from "@hooks//useFetch";

const MovieDetail = () => {
  const params = useParams();
  // parms là một object chứa các params trên URL
  // Dùng Detrucuring Assignment để lấy id từ params
  const { id } = params;

  // const [moiveInfo, setMovieInfo] = useState({});
  // const [relativeMovie, setRelativeMovie] = useState([]);
  // const [isRelativeMovie, setIsRelativeMovie] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //     // Dùng ?append_to_response để lấy thêm thông tin release_dates và credits
  //     `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
  //     {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //         Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  //       },
  //     },
  //   )
  //     .then(async (res) => {
  //       const data = await res.json();
  //       setMovieInfo(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, [id]);

  // Sử dụng custom hook với url, method = "GET", headers mặc định trong useFetch
  const { data: moiveInfo, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits`,
  });

  // Lấy các bộ phim liên quan/đề xuất
  // useEffect(() => {
  //   setIsRelativeMovie(true);
  //   fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json'",
  //       Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  //     },
  //   })
  //     .then(async (res) => {
  //       const data = await res.json();
  //       setRelativeMovie(data.results.slice(0, 8) || []);
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => setIsRelativeMovie(false));
  // }, [id]);
  const { data: relativeMovieResponse, isLoading: isRelativeMovie } = useFetch({
    url: `/movie/${id}/recommendations`,
  });

  // data trả về là một Object. Cần chuyển sang Array để dùng map
  const relativeMovie = relativeMovieResponse.results || [];

  const certification = (
    (moiveInfo.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;

  const crews = (moiveInfo.credits?.crew || [])
    .filter((crew) => ["Director", "Writer", "Screenplay"].includes(crew.job))
    .map((crew) => ({ id: crew.id, name: crew.name, job: crew.job }));

  // Kiểm tra loading. Đợi load hết dữ liệu mới hiện ra.
  if (isLoading && isRelativeMovie) {
    return <Loading />;
  }

  return (
    <div>
      {/* Truyền moiveInfo vào component Banner */}
      <Banner
        title={moiveInfo.title}
        releaseDate={moiveInfo.release_date}
        overview={moiveInfo.overview}
        voteAverage={moiveInfo.vote_average}
        backdropPath={moiveInfo.backdrop_path}
        posterPath={moiveInfo.poster_path}
        genres={moiveInfo.genres}
        certification={certification}
        crews={crews}
      />
      <div className="bg-black text-[1vw] text-white">
        <div className="mx-auto flex max-w-screen-lg gap-6 px-6 py-6">
          <div className="flex-[2]">
            <ActorList actors={moiveInfo.credits?.cast || []} />
            <RealatedMediaList
              mediaList={relativeMovie}
              isLoading={isRelativeMovie}
            />
          </div>
          <div className="mb-4 flex-1">
            <MovieInformation movieInfo={moiveInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
