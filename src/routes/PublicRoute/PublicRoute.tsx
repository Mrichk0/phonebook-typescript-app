import { useAppSelector } from "../../hooks/storeHooks";
import { Navigate, Outlet } from "react-router-dom";
import { shallowEqual } from "react-redux";

const PrivateRoute = () => {
  const isLogin = useAppSelector((state) => state.auth.isLogin, shallowEqual);

  if (isLogin) {
    return <Navigate to="/phone-book" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
