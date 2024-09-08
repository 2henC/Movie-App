import { currencyFormatter } from "@libs//utils";
import PropTypes from "prop-types";

const MovieInformation = (props) => {
  const {
    movieInfo: { budget, origin_country, original_title, revenue, status },
  } = props;

  return (
    <>
      <p className="text-[1.5vw] font-bold">Information</p>
      <div className="mt-4 flex flex-col gap-4">
        <div>
          <p className="text-[1.2vw] font-bold">Original Title</p>
          <p>{original_title}</p>
        </div>
        <div>
          <p className="text-[1.2vw] font-bold">Original Country</p>
          <p> {(origin_country || []).map((country) => country).join(", ")}</p>
        </div>
        <div>
          <p className="text-[1.2vw] font-bold">Status</p>
          <p>{status}</p>
        </div>
        <div>
          <p className="text-[1.2vw] font-bold">Budget</p>
          <p>{currencyFormatter(budget)}</p>
        </div>
        <div>
          <p className="text-[1.2vw] font-bold">Revenue</p>
          <p>{currencyFormatter(revenue)}</p>
        </div>
      </div>
    </>
  );
};

MovieInformation.propTypes = {
  movieInfo: PropTypes.object,
  budget: PropTypes.number,
  origin_country: PropTypes.array,
  original_title: PropTypes.string,
  revenue: PropTypes.string,
  status: PropTypes.string,
};
export default MovieInformation;
