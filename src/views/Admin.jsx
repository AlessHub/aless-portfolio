import React from 'react';
import CreateProject from '../components/layout/CreateProject';
import Navbar from '../components/layout/navigation/Navbar';
import ShowProjects from '../components/layout/ShowProjects';

const Home = () => {
  return (
    <>
        <Navbar/>
        <CreateProject/>
        <ShowProjects/>
    </>
  )
}

export default Home