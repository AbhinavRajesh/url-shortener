import { useContext } from "react";
import { Redirect } from "react-router-dom";

import Landing from "../components/Landing";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";

import { AuthContext } from "../context/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

  if (user) return <Redirect to="/pages/dashboard" />;

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-50 lg:max-w-7xl lg:w-full">
          <Header />
          <Landing />
          <Features />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
