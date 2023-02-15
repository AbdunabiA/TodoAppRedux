import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import { useState } from "react";

const SignUpForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ email}));
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-2 border-black rounded-md p-1 w-full mt-5 focus:outline-none"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />
      <button className="text-white font-bold w-full text-center bg-purple-600 p-1 rounded-md mt-5">
        Sign Up with email
      </button>
    </form>
  );
};

export default SignUpForm;
