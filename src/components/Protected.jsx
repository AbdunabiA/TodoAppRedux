import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = () => {
    const user = useSelector((state)=>state.user)

    const location = useLocation().pathname;
  return user ? (
    <Outlet />
  ) : (
    <Navigate to={"/sign-in"} state={{ from: location }} replace />
  );
};

export default Protected;
