import Background from '../components/Background';
import SignUpModal from '../components/SingInAndSignUp/SignUpModal';
import Logo from '../components/SingInAndSignUp/Logo';

const SignUp = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen z-10 bg-white">
      <Background />
      <div className="absolute top-0 left-0 w-full h-screen">
        <Logo />
        <SignUpModal />
      </div>
    </div>
  );
}
 

export default SignUp