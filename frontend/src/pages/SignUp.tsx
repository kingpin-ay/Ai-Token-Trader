import AuthLayouts from "@/components/custom/AuthLayouts";
import SignUpForm from "@/components/custom/Signup/SignUpForm";
import { useAppSelector } from "@/state/app/hook";
import { Link, Navigate } from "react-router-dom";

const SignUp = () => {
  const { username } = useAppSelector((state) => state.auth);
  console.log(username);
  return (
    <>
      {username && <Navigate to="/" />}
      <AuthLayouts title="Sign Up">
        <>
          <SignUpForm />

          <p className="pt-2 text-slate-500 font-normal">
            Already Have a Account ?{" "}
            <Link
              to="/login"
              className="font-normal text-white hover:cursor-pointer underline underline-offset-1"
            >
              Sign In.
            </Link>
          </p>
        </>
      </AuthLayouts>
    </>
  );
};

export default SignUp;
