import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AdminPrivateRoute from "../components/PrivateRoute/AdminPrivateRoute";
import CreatePost from "../pages/CreatePost";
import ViewPost from "../pages/ViewPost";
import UpdatePost from "../pages/UpdatePost";
import Search from "../pages/Search";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "create-post",
        element: (
          <AdminPrivateRoute>
            <CreatePost />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "view-post/:postSlug",
        element: <ViewPost />,
      },
      {
        path: "update-post/:postId",
        element: <UpdatePost />,
      },
    ],
  },
]);
