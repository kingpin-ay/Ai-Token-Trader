import AuthLayouts from "@/components/custom/AuthLayouts";
import SignUpForm from "@/components/custom/Signup/SignUpForm";
import { UserProfileAvatar } from "@/components/custom/UserProfileAvatar";
import { useAppSelector } from "@/state/app/hook";
import { Link, Navigate } from "react-router-dom";


const developers: Developers[] = [
  {"name" : "Ayush" , "icon" : ""},
  {"name" : "Saptendu" , "icon" : "https://gravatar.com/avatar/b68f6ab1e175aa63499096707b9de981?s=400&d=robohash&r=x"},
  {"name" : "Anibrata" , "icon" : "https://gravatar.com/avatar/c01f6bf7c9cec4208fefdb38d395604b?s=400&d=robohash&r=x"},
  {"name" : "Sudip" , "icon" : "https://gravatar.com/avatar/0ca0b71a59429cb029a99ab3c2652af7?s=400&d=robohash&r=x"},
]

interface Developers {
  name: string ,
  icon:string
}

interface GreetProps {
  developers: Developers[]
}

const SignUpGreet = (props: GreetProps) => {
  return (
    <>
    {props.developers.map((eachDeveloper , index) => {
      <div className="text-white border p-2 rounded-xl" key={index}>
        <UserProfileAvatar icon={eachDeveloper.icon} />
        {eachDeveloper.name}
      </div>
    })}
    </>
  )
}




const SignUp = () => {
  const { username } = useAppSelector((state) => state.auth);
  console.log(username);
  return (
    <>
      {username && <Navigate to="/" />}
      <AuthLayouts title="Sign Up" welcome={<SignUpGreet developers={developers}/>}>
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
