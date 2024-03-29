import React from "react";
import Navbar from "../components/layout/navigation/Navbar";
import ScrollToTop from "../components/layout/navigation/ScrollUpBtn";
import ContactSection from "../components/layout/organization/ContactSection";
import HomeSection from "../components/layout/organization/HomeSection";
import PortfolioSection from "../components/layout/organization/ProjectsSection";
import SkillsSection from "../components/layout/organization/SkillsSection";
import ThemeColor from "../components/layout/organization/Theme/ThemeColor";

const Home = () => {
  return (
    <>
      <Navbar />
      <ThemeColor/>
      <ScrollToTop/>
      <HomeSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection/>
    </>
  );
};

export default Home;
