import CircularProgressBar from "./CircularProgressBar";

const MovieCard = () => {
  return (
    <div className="rounded-lg border-slate-800">
      <img
        src="https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"
        className="rounded-lg"
      />
      <div className="px-4 py-2">
        <CircularProgressBar />
        <p className="font-bold">Title</p>
        <p className="text-slate-300">Release Date</p>
      </div>
    </div>
  );
};
export default MovieCard;
