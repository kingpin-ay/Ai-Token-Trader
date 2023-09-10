import { NavLink } from "react-router-dom";

const SiteTitle = (props : props) => {
  return (
    <div className={`lg:basis-2/5 basis-4/5 py-2 text-${props.color}`}>
      <NavLink
        to="/"
        className="w-44 flex justify-between align-middle text-center"
      >
        <img
          src={props.siteIcon}
          alt="this is the site Icon"
          className="w-10 text-center"
        />
        <span className="flex text-center font-bold text-md h-auto items-center">
          Ai-Token-Chain
        </span>
      </NavLink>
    </div>
  );
};

type props ={
    siteIcon : string
    color: string
}

export default SiteTitle;
