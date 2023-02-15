import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from "react-redux";

const Authenticated = ({children}) => {
    const user = useSelector((state) => state.user);
    const location = useLocation()
  return user ? ( 
    <Navigate to={location?.state?.from ? location?.state?.from :'/todos'} replace/>
  ) : children
}

export default Authenticated