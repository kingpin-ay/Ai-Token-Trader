import { Outlet } from "react-router-dom";
import Navbar from "../components/custom/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="p-4 px-52">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
