import Features from "@components/Features";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Landing from "@components/Landing";
import { AuthContext } from "context/AuthProvider";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  if (user) router.push("/dashboard");

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
