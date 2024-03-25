import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";

const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  return <div>{currentUser ? <Dashboard /> : <Navigate to="/sign-up" />}</div>;
};

export default PrivateRoute;
