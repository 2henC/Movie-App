import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <header className=" flex bg-slate-900 h-14 text-white justify-between items-center px-8">
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
    </>
  );
}

export default App;
