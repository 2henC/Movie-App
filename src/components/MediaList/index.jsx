import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const TABS = [
  { id: "all", value: "All" },
  { id: "tv", value: "TV Show" },
  { id: "movie", value: "Movie" },
];

const MeadiaList = () => {
  const [meidaList, setMediaList] = useState([]);
  const [mediaTabId, setMediaTabId] = useState("all");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/${mediaTabId}/day`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGU2YmJmMGYxNDFjZDZmNDA2NDc2YTM3YWFlMjdjZiIsIm5iZiI6MTcyNTE1OTk3Ny4yNDIwOTcsInN1YiI6IjY2ZDNkNjhhOWQ1OWViYzI5ZDQ1OGJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-U2h4X2-XJCODfKRpBoEpAJK8fCgPuaYoyjX47VtWFo`,
      },
    }).then(async (res) => {
      const data = await res.json();
      const popularMovies = data.results.slice(0, 12);
      setMediaList(popularMovies);
      console.log(popularMovies);
    });
  }, [mediaTabId]);

  return (
    <div className="bg-black px-8 text-[1.2vw] text-white">
      <div className="flex items-center gap-4 py-8">
        <p className="text-[2vw]">Trending</p>
        <ul className="flex rounded-md border-2 border-white">
          {/* <li className="cursor-pointer rounded-sm bg-white px-2 py-1 text-black">
            All
          </li>
          <li className="cursor-pointer rounded-md px-2 py-1">Movie</li>
          <li className="cursor-pointer rounded-md px-2 py-1">TV Show</li> */}
          {TABS.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer rounded-sm px-2 py-1 ${tab.id === mediaTabId ? "bg-white text-black" : ""}`}
              onClick={() => setMediaTabId(tab.id)}
            >
              {tab.value}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {meidaList.map((media) => (
          <MovieCard key={media.id} data={media} />
        ))}
      </div>
    </div>
  );
};
export default MeadiaList;
