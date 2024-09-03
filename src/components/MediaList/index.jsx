import MovieCard from "./MovieCard";

const MeadiaList = () => {
  return (
    <div className="bg-black px-8 text-[1.2vw] text-white">
      <div className="flex items-center gap-4 py-8">
        <p className="text-[2vw]">Trending</p>
        <ul className="flex rounded-md border-2 border-white">
          <li className="cursor-pointer rounded-sm bg-white px-2 py-1 text-black">
            All
          </li>
          <li className="cursor-pointer rounded-md px-2 py-1">Movie</li>
          <li className="cursor-pointer rounded-md px-2 py-1">TV Show</li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};
export default MeadiaList;
