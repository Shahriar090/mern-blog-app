import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar/DashSidebar";
import DashProfile from "../components/DashProfile/DashProfile";
import DashPosts from "../components/DashPosts/DashPosts";
import DashUsers from "../components/DashUsers/DashUsers";
import DashComments from "../components/DashComments/DashComments";
import DashboardComponent from "../DashboardComponent/DashboardComponent";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="h-full flex flex-col md:flex-row">
      <div className="sidebar md:w-56">
        <DashSidebar />
      </div>
      <div className=" w-full">
        {tab === "profile" && <DashProfile />}
        {tab === "posts" && <DashPosts />}
        {tab === "users" && <DashUsers />}
        {tab === "comments" && <DashComments />}
        {tab === "dashCompo" && <DashboardComponent />}
      </div>
    </div>
  );
}
