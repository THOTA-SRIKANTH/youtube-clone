import React from "react";
import { useSelector } from "react-redux";
import "../styles/Siderbar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-[13rem] col-span-1 bg-white mt-[4rem]  ">
      <ul>
        <li> <Link to='/'>Home</Link></li>
        <li>shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold">Subcriptions</h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>
      </ul>
      <h1 className="font-bold">wathc Later</h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>
      </ul>
      
    </div>
  );
};

export default Sidebar;
