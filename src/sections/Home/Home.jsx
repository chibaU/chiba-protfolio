import React from "react";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";

const Home = () => {
  const bg = "bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950";

  return (
    <section className={`relative min-h-screen ${bg} `}>
      <Header />
      <Hero />

      {/* Transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-b from-transparent to-gray-900" />
    </section>
  );
};

export default Home;
