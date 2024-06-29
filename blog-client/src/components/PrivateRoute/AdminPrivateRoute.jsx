import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import CreatePost from "../../pages/CreatePost";
const AdminPrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      {currentUser && currentUser.isAdmin ? (
        <CreatePost />
      ) : (
        <Navigate to={"/sign-up"} />
      )}
    </div>
  );
};

export default AdminPrivateRoute;
