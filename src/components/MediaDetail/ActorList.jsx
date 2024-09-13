import { useState } from "react";
import ActorInfo from "./ActorInfo";
import PropTypes from "prop-types";

const ActorList = ({ actors = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const currentActor = isShowMore ? actors.slice(0, 32) : actors.slice(0, 4);

  return (
    <div className="">
      <p className="mb-4 text-[1.5vw] font-bold">Actor</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {/* Actor's information */}
        {currentActor.map((actor) => (
          <ActorInfo
            key={actor.id}
            actorId={actor.id}
            actorName={actor.name || actor.original_name}
            actorImg={actor.profile_path}
            actorCharacter={actor.character}
            episodeCount={actor.episode_count}
          />
        ))}
      </div>
      <p
        className="mt-1 cursor-pointer"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? `Show less` : `Show more`}
      </p>
    </div>
  );
};

ActorList.propTypes = {
  actors: PropTypes.array,
};
export default ActorList;
