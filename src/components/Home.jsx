import React from 'react';
import '../css/App.css';
import logoBq from '../img/logoBQ.png';
import mozo from '../img/mozo.png';
import chef from '../img/cocina.png';
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <section className="App">
      <img src={logoBq} alt="logo" />
      <section className="formacion">
        <section className="alineacion">
          <img src={mozo} className="logo" alt="logo" />
          <NavLink to="/waiter" className="buttonHome">
            Mozo
          </NavLink>
        </section>
        <section className="alineacion">
          <img src={chef} className="logo" alt="logo" />
          <NavLink to="/chef" className="buttonHome">
            Chef
          </NavLink>
        </section>
      </section>
    </section>
  );
}

export default Home;
