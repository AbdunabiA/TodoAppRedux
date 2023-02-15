import logo from '../assets/logo.png'

import Background from '../components/Background';
import SignInModal from '../components/SingInAndSignUp/SignInModal';
import Logo from '../components/SingInAndSignUp/Logo';

const SignIn = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen z-10 bg-white">
      <Background />
      <div className="absolute top-0 left-0 w-full h-screen">
        <Logo />
        <SignInModal />
      </div>
    </div>
  );
}

export default SignIn