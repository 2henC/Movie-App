import ImageComponent from "@libs//Image";
import PropTypes from "prop-types";

const ActorInfo = ({ actorCharacter, actorImg, actorName, episodeCount }) => {
  return (
    <div className="rounded-lg border border-slate-300 bg-slate-600 text-white shadow-md">
      <ImageComponent
        className="w-full rounded-lg"
        src={
          actorImg
            ? `https://media.themoviedb.org/t/p/w138_and_h175_face${actorImg}`
            : "/img/ActorNoImage.svg"
        }
        height={175}
        width={138}
      />
      <div className="p-3">
        <p className="font-bold">{actorName}</p>
        <p>{actorCharacter}</p>
        <p>{`${episodeCount} Episode${Number(episodeCount) > 1 ? "s" : ""}`}</p>
      </div>
    </div>
  );
};

ActorInfo.propTypes = {
  actorCharacter: PropTypes.string,
  actorId: PropTypes.number,
  actorImg: PropTypes.string,
  actorName: PropTypes.string,
  episodeCount: PropTypes.number,
};

export default ActorInfo;
