import { JSXElementConstructor, ReactElement } from "react";
import SiteTitle from "./Navbar/SiteTitle";
import { assests } from "@/static/assetsCollection";

const AuthLayouts = (props: props) => {
  return (
    <div className="w-screen h-screen lg:flex">
      <div
        className={`basis-1/3 bg-black w-screen h-screen lg:block lg:p-4 ${
          props.isLogin ? "p-1" : "hidden"
        }`}
      >
        {props.isLogin && <SiteTitle siteIcon={assests.siteIcon} color="white" />}
        <div className="lg:py-32 pt-20 text-white">
          <div className="px-8 flex flex-col">
            <div className="mb-12">
              <p className=" text-4xl">{props.isLogin && props.title}</p>
            </div>
            {props.isLogin && props.children}
          </div>
        </div>
      </div>
      <div
        className={`${
          props.isLogin ? "hidden" : ""
        } lg:block basis-2/3 bg-slate-600 h-screen overflow-hidden lg:overflow-visible`}
      >
        {!props.isLogin && (
          <div className="lg:p-2">
            <SiteTitle siteIcon={assests.siteIcon} color="white"/>
            <div className="lg:py-20 lg:h-0 h-screen pt-5 text-white mt-10 lg:mt-0">
              <div className="px-8 flex flex-col">
                <div className="mb-12">
                  <p className=" text-4xl">{props.title}</p>
                </div>
                {props.children}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface props {
  children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  title: string;
  isLogin?: boolean;
}

export default AuthLayouts;
