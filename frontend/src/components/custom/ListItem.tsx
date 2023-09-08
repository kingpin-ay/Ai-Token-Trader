import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { NavLink } from "react-router-dom";
import React from "react";

interface Props {
  children: React.ReactNode;
  to: string;
  title: string;
}

const ListItem: React.FC<Props> = ({ children, to, title }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <NavLink
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </NavLink>
      </NavigationMenuLink>
    </li>
  );
};

export default ListItem;
