import { NavLink } from "react-router-dom";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

const routes = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contacts", path: "/contacts" },
  { title: "Tester", path: "/tester" },
];

const RightSideNavPanle = ({ navbarOpen, setNavbarOpen }: props) => {
  return (
    <>
      <div className="flex justify-around flex-col basis-1/5 lg:hidden pr-4">
        <div
          className={`flex-row-reverse ${navbarOpen ? "hidden" : "flex"}`}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <HamburgerMenuIcon className="" />
        </div>
      </div>

      <div
        className={`absolute  right-0 top-0 bottom-0 w-6/12 backdrop-blur-md p-4 py-6 ${
          navbarOpen ? "block" : "hidden"
        } `}
      >
        <div className="flex flex-row-reverse">
          <Cross1Icon
            className="mt-1 mr-2"
            onClick={() => setNavbarOpen(!navbarOpen)}
          />
        </div>
        <div className="flex flex-row justify-around mt-4">
          <div className="flex flex-col gap-4 text-left">
            {routes.map((eachRoute, index) => (
              <NavLink to={eachRoute.path} key={index} onClick={() => setNavbarOpen(!navbarOpen)}>
                <div>{eachRoute.title}</div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

type props = {
  navbarOpen: boolean;
  setNavbarOpen: (currentStatus: boolean) => void;
};

export default RightSideNavPanle;
