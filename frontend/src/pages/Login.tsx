import SiteTitle from "@/components/custom/Navbar/SiteTitle";
import { assests } from "../static/assetsCollection";
import LoginForm from "@/components/custom/Login/LoginForm";


const Login = () => {



  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="basis-1/3 bg-black p-4">
          <SiteTitle siteIcon={assests.siteIcon} color="white" />
          <div className="py-32 text-white">
            <div className="px-8 flex flex-col">
              <div className="mb-12">
                <p className=" text-4xl">Sign In</p>
              </div>
              <LoginForm/>
            </div>
          </div>
        </div>
        <div className="basis-2/3 bg-slate-600"></div>
      </div>
    </>
  );
};

export default Login;
