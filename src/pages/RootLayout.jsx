import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div>
      <Header />
      {/* // Outlet là nơi hiển thị component tương ứng với route, cụ thể là HomePage hoặc MovieDetail */}
      <Outlet />
    </div>
  );
};
export default RootLayout;
