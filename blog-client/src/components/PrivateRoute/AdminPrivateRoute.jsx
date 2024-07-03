import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import CreatePost from "../../pages/CreatePost";
import UpdatePost from "../../pages/UpdatePost";
const AdminPrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      {currentUser && currentUser.isAdmin ? (
        // TODO: fix the outlet bug
        <>
          <CreatePost />
        </>
      ) : (
        <Navigate to={"/sign-up"} />
      )}
    </div>
  );
};

export default AdminPrivateRoute;
