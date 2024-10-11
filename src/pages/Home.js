import React from "react";
import Nav from "../componets/nav/Nav";
import Hero from "../componets/hero/Hero";
import Contributor from "../componets/contributor/Contributor";
import ExploreMore from "../componets/explore/Explore";
import Subscription from "../componets/subscription/Subscription";
import Footer from "../componets/footer/Footer";

function Home() {
  return (
    <div className="home-page">
      {/* Navigation Bar */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* Contributor Section */}
      <Contributor />

      {/* Explore More Section */}
      <ExploreMore />

      {/* Subscription Section */}
      <Subscription />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Home;
