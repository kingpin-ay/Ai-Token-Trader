import SiteTitle from "@/components/custom/Navbar/SiteTitle";
import { assests } from "../static/assetsCollection";
import LoginForm from "@/components/custom/Login/LoginForm";
import { useAppSelector } from "@/state/app/hook";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { username } = useAppSelector((state) => state.auth);
  console.log(username)

  return (
    <>
      {username && <Navigate to="/" />}
      <div className="w-screen h-screen lg:flex">
        <div className="basis-1/3 bg-black w-screen h-screen lg:p-4 p-1">
          <SiteTitle siteIcon={assests.siteIcon} color="white" />
          <div className="lg:py-32 py-20 text-white">
            <div className="px-8 flex flex-col">
              <div className="mb-12">
                <p className=" text-4xl">Sign In</p>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="hidden lg:block basis-2/3 bg-slate-600"></div>
      </div>
    </>
  );
};

export default Login;
