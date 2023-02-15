import google from "../../assets/google 1.png";
import facebook from "../../assets/facebook 1.png";
import apple from "../../assets/apple 1.png";

import SignInOrSignUpWith from "./SignInOrSignUpWith";
import SignUpForm from "./SignUpForm";

import { useNavigate } from "react-router-dom";

const SignUpModal = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="bg-white rounded-md p-5 w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%]">
        <h1 className="text-2xl font-bold text-center">Sign up</h1>
        <SignInOrSignUpWith img={google} text="Continue with Google" />
        <SignInOrSignUpWith img={facebook} text="Continue with Facebook" />
        <SignInOrSignUpWith img={apple} text="Continue with Facebook" />
        <hr className="border border-black mt-5" />
        <SignUpForm />
        <p className="cursor-pointer mt-2 hover:text-blue-900 text-xs">
          By continuing with Google, Apple, or Email, you agree to Todoist's
          <b className="cursor-pointer text-blue-900">
            Terms of Service
          </b> and{" "}
          <b className="cursor-pointer text-blue-900">Privacy Policy.</b>
        </p>
        <hr className="border border-black mt-5" />
        <div className="flex items-center justify-center space-x-2">
          <p>Already signed up? Go to</p>
          <p className="hover:text-purple-600 cursor-pointer " onClick={()=>navigate('/sign-in')}>sign in.</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
