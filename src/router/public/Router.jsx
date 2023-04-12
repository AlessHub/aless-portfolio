import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from '../../views/Home';
import Admin from '../../views/Admin';
import Edit from '../../components/layout/EditProject';

export default class PublicRoute extends React.Component {
    render() {
      return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path='/admin' element={<Admin/>} />
                <Route path='edit/:id' element={<Edit/>} />
            </Routes>
        </Router>
      );
    }
  }