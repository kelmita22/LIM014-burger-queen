import React from "react";
/* import { NavLink } from "react-router-dom"; */
import "../css/App.css";
import Logo from "../img/logoBQ.svg";
import Mozo from "../img/mozo.svg";
import Cocina from "../img/cocina.svg";
import ImageProject from "./Image"

const Home = () => {
  const img = [
    { id: "logo" },
    { id: "cocina" },
    { id: "mozo" }
  ]
  return (
    <div>
      <div className="form-container">

        <img className='logoBQ' src={Logo} alt="logo" width='100%' />
        <form className="responsive">
          <div className="control">
            <img className="btn" src={Mozo} alt="logo" width='100%' />
            <p><a href="/waiter" className="buttonHome">Mozo</a></p>
          </div>
          <div className="control">
            <img className="btn" src={Cocina} alt="logo" width='100%' />
            <p><a href="/chef" className="buttonHome">Chef</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
