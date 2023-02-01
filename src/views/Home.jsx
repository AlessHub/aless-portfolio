import React from 'react';
import Navbar from '../components/layout/navigation/Navbar';
import HomeSection from '../components/layout/organization/HomeSection';
import SkillsSection from '../components/layout/organization/SkillsSection';
import ShowProjects from '../components/layout/ShowProjects'

const Home = () => {
  return (
    <>
        <Navbar/>
        <HomeSection/>
        <SkillsSection/>
        <ShowProjects/>
        {/* <ShowElement/> */}
    </>
  )
}

export default Home