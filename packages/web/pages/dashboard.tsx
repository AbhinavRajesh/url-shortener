import DashboardHeader from "@components/DashboardHeader";
import DashboardHome from "@components/DashboardHome";
import { AuthContext } from "context/AuthProvider";
import { useRouter } from "next/router";
import { useContext } from "react";

const Dashboard = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  if (user === null) router.push("/");

  return (
    <div className="max-w-7xl mx-auto">
      <DashboardHeader />
      <DashboardHome />
    </div>
  );
};

export default Dashboard;
