import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { NavLink } from "react-router-dom";
import {assests} from '@/static/assetsCollection'
import ListItem from "../ListItem";
import { UserProfileAvatar } from "../UserProfileAvatar";
import SiteTitle from "./SiteTitle";

const Navbar = () => {
  return (
    <>
      <NavigationMenu className="p-4 px-44 flex flex-row bg-transparent">
        {/* this div below is defining the actual logo and the site title */}
        <SiteTitle siteIcon={assests.siteIcon} color={'black'} />

        {/* navigation list is below code with shadcnui */}
        <NavigationMenuList
          className="basis-1/5 flex flex-row justify-around gap-8 py-2"
          style={{ marginTop: "0.5rem" }}
        >
          <NavigationMenuItem>
            <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
            <NavigationMenuContent className="absolute">
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <NavLink
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      to="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">Home</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Redirects To home page of the website. you need to be
                        logged in
                      </p>
                    </NavLink>
                  </NavigationMenuLink>
                </li>
                <ListItem to="/about" title="About">
                  This is a about page for the Understanding of the website and
                  what this site is actually using
                </ListItem>
                <ListItem to="/tester" title="Testers">
                  This Page is only for Testers , Developers only site
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <NavLink to="/contacts">Contacts</NavLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <NavLink to="/login">Login</NavLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* User Details will be under this dev*/}
        <div className="basis-2/5 flex gap-1 flex-row-reverse items-center">
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
