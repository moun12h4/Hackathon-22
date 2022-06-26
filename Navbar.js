import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';
import img from './hostel.png';
import image from './vishnu logo.png';

const Navbar = () => {
  const changestyle = ({ isActive }) => {
    return {
      color: isActive ? "black" : "brown",
    };
  };
  return (
    <div>
      <div className="navmenu">
        <table className="tab">
          <tr><td className="title"><img src={image} classname="image"/></td>
          <td><h1><i>SVECW</i></h1></td>
          <h2>
          <NavLink className="item" to="home" style={changestyle}>
            Home
          </NavLink>
          <NavLink className="item" to="signup" style={changestyle}>
            Signup
          </NavLink>
          <NavLink className="item" to="login" style={changestyle}>
            Login
          </NavLink>
          <NavLink className="item" to="allotment" style={changestyle}>
            Hostel Allotment
          </NavLink>
          <NavLink className="item" to="contactus" style={changestyle}>
            Contact Us
          </NavLink>
          </h2>
          </tr>
          </table>
        </div>
      <img src={img}/>
    </div>
  );
};

export default Navbar;
