import PaginaIndicator from "./PaginaIndicator";
import Movie from "./Movie";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import Loading from "@libs//Loađing";
import useFetch from "@hooks//useFetch";

const FeatureMovie = () => {
  // Đây là một func không hợp lệ => Lỗi 401
  // const res = await fetch("https://api.themoviedb.org/3/movie/popular"); // asynconous bất đồng bộ

  // const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  // Hợp lệ, Sẽ hoạt động nhưng vẫn bị lỗi 401 Unauthorized và bị Side Effect ảnh hưởng đến performance
  // fetch("https://api.themoviedb.org/3/movie/popular", {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGU2YmJmMGYxNDFjZDZmNDA2NDc2YTM3YWFlMjdjZiIsIm5iZiI6MTcyNTE1OTk3Ny4yNDIwOTcsInN1YiI6IjY2ZDNkNjhhOWQ1OWViYzI5ZDQ1OGJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-U2h4X2-XJCODfKRpBoEpAJK8fCgPuaYoyjX47VtWFo`,
  //   },
  // }).then(async (res) => {
  //   const data = await res.json();
  //   setMovies(data.results);
  // });

  // Sử dụng useEffect để gọi API (tránh Side Effect ảnh hưởng đến performance)
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://api.themoviedb.org/3/movie/popular", {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  //     },
  //   })
  //     .then(async (res) => {
  //       const data = await res.json();
  //       const popularMovies = data.results.slice(0, 4);
  //       setMovies(popularMovies);
  //       setActiveMovieId(popularMovies[0].id);
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => setIsLoading(false));
  // }, []);

  const { data: moviesResponse, isLoading } = useFetch({
    url: `/movie/popular`,
  });

  const movies = useMemo(
    () => (moviesResponse.results || []).slice(0, 4),
    [moviesResponse],
  );

  console.log({ movies });

  useEffect(() => {
    if (movies[0]?.id) setActiveMovieId(movies[0].id);
  }, [movies]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}

      {/* Truyền state cho component con PaginaIndicator: movies và activeMovieId */}
      <PaginaIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};
export default FeatureMovie;
