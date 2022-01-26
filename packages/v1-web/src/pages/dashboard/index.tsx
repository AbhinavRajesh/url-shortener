import { useContext } from "react";
import { Redirect } from "react-router-dom";

import { AuthContext } from "../../context/AuthProvider";

import DashboardHeader from "../../components/DashboardHeader";
import DashboardHome from "../../components/DashboardHome";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <Redirect to="/pages/dashboard" />;

  return (
    <div className="max-w-7xl mx-auto">
      <DashboardHeader />
      <DashboardHome />
    </div>
  );
};

export default Dashboard;
