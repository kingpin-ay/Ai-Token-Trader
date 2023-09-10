import { Outlet } from "react-router-dom";
import Navbar from "../components/custom/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="p-4 lg:px-52 md:px-36 px-6">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
