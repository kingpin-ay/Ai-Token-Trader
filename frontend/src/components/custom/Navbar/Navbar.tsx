import { NavigationMenu } from "@radix-ui/react-navigation-menu";

import { assests } from "@/static/assetsCollection";

import { UserProfileAvatar } from "../UserProfileAvatar";
import SiteTitle from "./SiteTitle";
import NavigationMenuItems from "./NavigationMenuItems";
import { useState } from "react";
import RightSideNavPanle from "./RightSideNavPanle";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <NavigationMenu className="lg:p-4 p-2 lg:px-44 md:px-28 flex flex-row bg-transparent">
        {/* this div below is defining the actual logo and the site title */}
        <SiteTitle siteIcon={assests.siteIcon} color={"black"} />

        {/* navigation list is below code with shadcnui */}
        <NavigationMenuItems />


        {/* this is the right side panle for the mobile and tab views */}
        <RightSideNavPanle navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
        

        {/* User Details will be under this dev*/}
        <div className="basis-2/5 lg:flex gap-1 flex-row-reverse items-center hidden">
          <UserProfileAvatar />
          <div className="py-2 flex flex-col">
            <span className="px-2">Root Aloy</span>
          </div>
        </div>
      </NavigationMenu>
    </>
  );
};

export default Navbar;
