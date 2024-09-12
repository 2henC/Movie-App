import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="flex h-14 items-center justify-between bg-slate-900 px-8 text-white">
        <div className="flex items-center gap-4">
          {/* Link tới trang chủ */}
          <Link to="/">
            <img src="/img/netflix.png" className="w-12 sm:w-12"></img>
          </Link>

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
    </div>
  );
};
export default Header;
