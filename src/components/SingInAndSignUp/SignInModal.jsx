import google from "../../assets/google 1.png";
import facebook from "../../assets/facebook 1.png";
import apple from "../../assets/apple 1.png";

import SignInOrSignUpWith from "./SignInOrSignUpWith";
import SignInForm from "./SignInForm";

import { useNavigate } from "react-router-dom";

const SignInModal = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="bg-white rounded-md p-5 w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%]">
        <h1 className="text-2xl font-bold text-center">Sign in</h1>
        <SignInOrSignUpWith img={google} text="Continue with Google" />
        <SignInOrSignUpWith img={facebook} text="Continue with Facebook" />
        <SignInOrSignUpWith img={apple} text="Continue with Facebook" />
        <hr className="border border-black mt-5" />
        <SignInForm />
        <p className="cursor-pointer mt-2 hover:text-blue-900">
          Forgot your password?
        </p>
        <hr className="border border-black mt-5" />
        <div className="flex items-center justify-center space-x-5">
          <p>Don't have an account</p>{" "}
          <p className="hover:text-purple-600 cursor-pointer " onClick={()=>navigate('/sign-up')}>Sign up</p>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
