import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loading from "@libs//Loađing";
import MediaCard from "../MediaCard";

const MeadiaList = ({ title, tabs }) => {
  const [meidaList, setMediaList] = useState([]);
  const [mediaTabId, setMediaTabId] = useState(tabs[0]?.id);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const url = tabs.find((tab) => tab.id === mediaTabId).url;
    if (url) {
      fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      })
        .then(async (res) => {
          const data = await res.json();
          const popularMovies = data.results.slice(0, 12);
          setMediaList(popularMovies);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [mediaTabId, tabs]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-black px-8 text-[1.2vw] text-white">
      <div className="flex items-center gap-4 py-8">
        <p className="text-[2vw]">{title}</p>
        <ul className="flex rounded-md border-2 border-white">
          {/* <li className="cursor-pointer rounded-sm bg-white px-2 py-1 text-black">
            All
          </li>
          <li className="cursor-pointer rounded-md px-2 py-1">Movie</li>
          <li className="cursor-pointer rounded-md px-2 py-1">TV Show</li> */}
          {tabs.map((tab) => (
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
          <MediaCard key={media.id} data={media} />
        ))}
      </div>
    </div>
  );
};

MeadiaList.propTypes = {
  title: PropTypes.string,
  tabs: PropTypes.array,
};
export default MeadiaList;
