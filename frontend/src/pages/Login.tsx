import LoginForm from "@/components/custom/Login/LoginForm";
import { useAppSelector } from "@/state/app/hook";
import { Link, Navigate } from "react-router-dom";
import AuthLayouts from "@/components/custom/AuthLayouts";

const Login = () => {
  const { username } = useAppSelector((state) => state.auth);
  console.log(username);

  return (
    <>
      {username && <Navigate to="/" />}
      <AuthLayouts title="Sign In" isLogin={true}>
        <>
          <LoginForm />

          <p className="pt-2 text-slate-500 font-normal">
            Don't Have a Account ?{" "}
            <Link to="/signup" className="font-normal text-white hover:cursor-pointer underline underline-offset-1">
              Sign Up.
            </Link>
          </p>
        </>
      </AuthLayouts>
    </>
  );
};

export default Login;
