import React from 'react';
import CreateProject from '../components/layout/CreateProject';
import Navbar from '../components/layout/navigation/Navbar';

const Home = () => {
  return (
    <>
        <Navbar/>
        <CreateProject/>
    </>
  )
}

export default Home