import logo from '../assets/logo2.png'
import user from '../assets/user.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoIosNotificationsOutline} from 'react-icons/io'

import { useNavigate } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSIze'

const Navbar = () => {
    const navigate = useNavigate()
    const width = useWindowSize()[0]
  return (
    <div className="w-full h-[10vh] flex items-center justify-between px-5 md:px-10">
      <div className="flex items-center space-x-5">
        <div onClick={() => navigate("/todos")} className="cursor-pointer">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center space-x-1">
          <AiOutlineSearch className="cursor-pointer  sm:text-white" size={30} />
          {width > 767 && (
            <p className="text-lg text-gray-400">
              Search for any training you want
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <IoIosNotificationsOutline size={30} className="cursor-pointer" />
        <div className="rounded-full border-2 border-purple-600 overflow-hidden p-1 cursor-pointer">
          <img src={user} alt="user" className="rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Navbar