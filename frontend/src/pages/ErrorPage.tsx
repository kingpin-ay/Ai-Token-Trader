import { Button } from "@/components/ui/button";
import errorpage from "@/assets/errorpage.png"
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate('/');
  }
  return (
    <div className="flex flex-row justify-around h-screen" id="error-page">
      <div className="flex flex-col justify-around items-center pb-20">
        <div className="text-center flex flex-col justify-around items-center gap-5">
          <div>
            <p className="font-bold text-4xl text-red-700">Error</p>
            <p className="text-slate-500 font-bold text-2xl">Oh!</p>
            <p>Looks like this page dosen't exists.</p>
          </div>
          <img className="w-40 h-40" src={errorpage} alt={"a 404 image"} />
          <Button className="w-40" onClick={goBackToHome}>Go Back</Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
