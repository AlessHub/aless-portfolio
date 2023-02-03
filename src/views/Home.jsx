import React from 'react';
import Navbar from '../components/layout/navigation/Navbar';
import HomeSection from '../components/layout/organization/HomeSection';
import PortfolioSection from '../components/layout/organization/PortfolioSection';
import SkillsSection from '../components/layout/organization/SkillsSection';

const Home = () => {
  return (
    <>
        <Navbar/>
        <HomeSection/>
        <SkillsSection/>
        <PortfolioSection/>
    </>
  )
}

export default Home