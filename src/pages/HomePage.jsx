// import Header from "../components/Header";
import FeatureMovie from "../components/FeatureMovie"; // Tự động lấy index.jsx
import MeadiaList from "../components/MediaList";
import { TABS_TOP_RATE, TABS_TRENDING } from "../libs/constants";

function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <FeatureMovie />
      <MeadiaList title={"Trending"} tabs={TABS_TRENDING} />
      <MeadiaList title={"Top rate"} tabs={TABS_TOP_RATE} />
    </>
  );
}

export default HomePage;
