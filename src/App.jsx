import { faMagnifyingGlass, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <header className="flex h-14 items-center justify-between bg-slate-900 px-8 text-white">
        <div className="flex items-center gap-4">
          <img src="./img/netflix.png" className="w-12 sm:w-12"></img>
          <div>Phim</div>
          <div>Truyền hình</div>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </div>
      </header>

      <div className="relative text-white">
        <img
          src="https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg"
          className="aspect-video brightness-50"
        />
        <div className="absolute left-8 top-[20%] w-1/2 sm:w-1/3">
          <p className="mb-2 font-bold sm:text-[2vw]">Inside Out 2</p>
          <div>
            <div className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
              PG13
            </div>
            <div className="text-[2.4vw] sm:text-[1.2vw]">2024-06-11</div>
          </div>

          <div className="mt-3 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>
              Teenager Riley&apos;s mind headquarters is undergoing a sudden
              demolition to make room for something entirely unexpected: new
              Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been
              running a successful operation by all accounts, aren’t sure how to
              feel when Anxiety shows up. And it looks like she’s not alone.
            </p>
          </div>

          <div className="mt-4">
            <button className="text-10 mr-2 rounded bg-white px-4 py-2 text-black lg:text-lg">
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
            <button className="text-10 rounded bg-gray-300/35 px-4 py-2 text-black lg:text-lg">
              Thông tin
            </button>
          </div>
        </div>
        <div className="absolute bottom-[10%] right-8">
          <ul className="flex gap-1">
            <li className="h-2 w-14 cursor-pointer bg-slate-100"></li>
            <li className="h-2 w-14 cursor-pointer bg-slate-600"></li>
            <li className="h-2 w-14 cursor-pointer bg-slate-600"></li>
            <li className="h-2 w-14 cursor-pointer bg-slate-600"></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
