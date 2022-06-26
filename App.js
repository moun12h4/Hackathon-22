import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Contactus from './Contactus';
import HostelAllotment from './HostelAllotment';

const App = () => {
    return(
        <div>
            <Navbar />
            <Routes>
                <Route path='home' element={<Home/>}></Route>
                <Route path='signup' element={<Signup/>}></Route>
                <Route path='login' element={<Login/>}></Route>
                <Route path='allotment' element={<HostelAllotment/>}></Route>
                <Route path='contactus' element={<Contactus/>}></Route>
            </Routes>
        </div>
    );
};

export default App;
 