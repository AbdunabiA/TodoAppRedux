import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import { useState } from "react";


const SignInForm = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser({email, password}))
  }

  return (
    <form className="w-full" onSubmit={handleSubmit} >
      <input
        type="email"
        className="border-2 border-black rounded-md p-1 w-full mt-5 focus:outline-none"
        placeholder="Email"
        onChange={(e)=> setEmail(e.target.value)}
        required
      />
      <input
        type="Password"
        className="border-2 border-black rounded-md p-1 w-full mt-5 focus:outline-none"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        required
      />
      <button className="text-white font-bold w-full text-center bg-purple-600 p-1 rounded-md mt-5">Sign In</button>
    </form>
  );
}

export default SignInForm