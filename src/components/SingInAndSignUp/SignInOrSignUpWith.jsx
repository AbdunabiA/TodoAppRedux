

const SignInOrSignUpWith = ({img, text}) => {
  return (
    <div className="w-full flex items-center justify-center space-x-2 border border-black rounded-md mt-5 cursor-pointer">
      <img src={img} alt="" />
      <p className="font-bold p-2">{text}</p>
    </div>
  );
}

export default SignInOrSignUpWith