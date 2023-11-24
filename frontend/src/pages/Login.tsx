import LoginForm from "@/components/custom/Login/LoginForm";
import { useAppSelector } from "@/state/app/hook";
import { Link, Navigate } from "react-router-dom";
import AuthLayouts from "@/components/custom/AuthLayouts";

const WelcomeGreet = () => {
  return (
    <>
      <div className="flex p-24 justify-around">
        <div className="flex flex-col gap-4 justify-between">
          <p className="text-4xl text-center font-bold">
            Wel<span className="text-red-500">come</span> To <br />
            <span className="text-3xl font-semibold">
              AI-<span className="text-white">TOKEN</span>-TRADER
            </span>
          </p>
          <p className="text-center ">
            your gateway to the exciting world of AI and blockchain trading! Our
            sign-in page offers you a secure and user-friendly way to access
            your account and explore the limitless possibilities of AI-powered
            blockchain trading.
          </p>
          <p className="text-center ">
            Whether you're a seasoned trader or just stepping into the world of
            AI and blockchain, our sign-in page is designed to provide you with
            a seamless and efficient experience. Safeguarding your data and
            ensuring your privacy is our top priority, so you can trade with
            confidence.
          </p>
          <p className="text-center ">
            Join our vibrant community of traders and harness the power of
            artificial intelligence to navigate the complex world of blockchain
            investments. Sign in now and embark on a journey where innovation
            meets opportunity at AI-Token-Trader!
          </p>
        </div>
      </div>
    </>
  );
};

const Login = () => {
  const { username } = useAppSelector((state) => state.auth);
  console.log(username);

  return (
    <>
      {username && <Navigate to="/" />}
      <AuthLayouts title="Sign In" isLogin={true} welcome={<WelcomeGreet />}>
        <>
          <LoginForm />

          <p className="pt-2 text-slate-500 font-normal">
            Don't Have a Account ?{" "}
            <Link
              to="/signup"
              className="font-normal text-white hover:cursor-pointer underline underline-offset-1"
            >
              Sign Up.
            </Link>
          </p>
        </>
      </AuthLayouts>
    </>
  );
};

export default Login;
