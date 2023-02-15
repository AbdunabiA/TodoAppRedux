import logo from '../../assets/logo.png'

const Logo = () => {
  return (
    <div className="flex justify-end items-center space-x-1 px-5 sm:px-10">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo