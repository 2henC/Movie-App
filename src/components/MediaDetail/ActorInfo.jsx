import PropTypes from "prop-types";

const ActorInfo = ({ actorCharacter, actorImg, actorName }) => {
  return (
    <div className="rounded-lg border border-slate-300 bg-slate-600 text-white shadow-md">
      <img
        className="rounded-lg"
        src={
          actorImg
            ? `https://media.themoviedb.org/t/p/w138_and_h175_face${actorImg}`
            : "/img/ActorNoImage.svg"
        }
      />
      <div className="p-3">
        <p className="font-bold">{actorName}</p>
        <p>{actorCharacter}</p>
        <p>Number Episodes</p>
      </div>
    </div>
  );
};

ActorInfo.propTypes = {
  actorCharacter: PropTypes.string,
  actorId: PropTypes.number,
  actorImg: PropTypes.string,
  actorName: PropTypes.string,
};

export default ActorInfo;
