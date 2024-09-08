import MediaCard from "@components/MediaCard";

import PropTypes from "prop-types";

const RealatedMediaList = ({ mediaList = [] }) => {
  return (
    <div className="mt-4">
      <p className="mb-4 text-[1.5vw] font-bold">More like this</p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mediaList.map((media) => (
          <MediaCard key={media.id} data={media} />
        ))}
      </div>
    </div>
  );
};

RealatedMediaList.propTypes = {
  mediaList: PropTypes.array,
};
export default RealatedMediaList;
