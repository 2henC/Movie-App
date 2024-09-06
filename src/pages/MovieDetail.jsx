// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay } from "@fortawesome/free-solid-svg-icons";
// import CircularProgressBar from "../components/CircularProgressBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { groupBy } from "lodash";
import Loading from "../components/Loading";
import Banner from "../components/MediaDetail/Banner";
import ActorList from "../components/MediaDetail/ActorList";

const MovieDetail = () => {
  const params = useParams();
  // parms là một object chứa các params trên URL
  // Dùng Detrucuring Assignment để lấy id từ params
  const { id } = params;
  const [moiveInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      // Dùng ?append_to_response để lấy thêm thông tin release_dates và credits
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGU2YmJmMGYxNDFjZDZmNDA2NDc2YTM3YWFlMjdjZiIsIm5iZiI6MTcyNTE1OTk3Ny4yNDIwOTcsInN1YiI6IjY2ZDNkNjhhOWQ1OWViYzI5ZDQ1OGJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-U2h4X2-XJCODfKRpBoEpAJK8fCgPuaYoyjX47VtWFo`,
        },
      },
    )
      .then(async (res) => {
        const data = await res.json();
        setMovieInfo(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  // const certification = (
  //   (moiveInfo.release_dates?.results || []).find(
  //     (result) => result.iso_3166_1 === "US",
  //   )?.release_dates || []
  // ).find((releaseDate) => releaseDate.certification)?.certification;

  // const crews = (moiveInfo.credits?.crew || [])
  //   .filter((crew) => ["Director", "Writer", "Screenplay"].includes(crew.job))
  //   .map((crew) => ({ id: crew.id, name: crew.name, job: crew.job }));

  // const groupCrews = groupBy(crews, "job");

  if (isLoading) {
    return <Loading />;
  }

  console.log({ moiveInfo });

  return (
    <div>
      {/* Truyền moiveInfo vào component Banner */}
      <Banner mediaInfo={moiveInfo} />
      <div className="bg-black text-[1vw] text-white">
        <div className="mx-auto flex max-w-screen-lg gap-6 px-6 py-6">
          <div className="flex-[2]">
            <ActorList actors={moiveInfo.credits?.cast || []} />
          </div>
          <div className="mb-4 flex-1 text-[1.5vw] font-bold">Information</div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
