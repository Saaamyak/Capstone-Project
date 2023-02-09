import data from '../Utility/ConstUtility.json';
import '../Css/header.css';
import { useEffect } from 'react';

function toggleNav() {
  const nav = document.querySelectorAll('.nav-item');
  const bar = document.querySelector('.nav');
  const burger = document.querySelector('.burger');

  bar.classList.toggle('nav-active');
  nav.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });
  burger.classList.toggle('toggle');
}

function Header(props) {
  return (
    <div className="Header">
      <h2 className="logo" onClick={() => props.setTabState(data.HOME_STATE)}>ArtShop</h2>
      <ul className="nav">
        <li className="nav-item">
          <div onClick={() => props.setTabState(data.HOME_STATE)} className={(props.tabState === data.HOME_STATE) ? "nav-link-header active" : "nav-link-header"}>Home</div>
        </li>
        <li className="nav-item">
          <div onClick={() => props.setTabState(data.ABOUT_STATE)} className={(props.tabState === data.ABOUT_STATE) ? "nav-link-header active" : "nav-link-header"}>About</div>
        </li>
        <li className="nav-item">
          <div onClick={() => props.setTabState(data.CONTACT_STATE)} className={(props.tabState === data.CONTACT_STATE) ? "nav-link-header active" : "nav-link-header"}>Contact</div>
        </li>
      </ul>
      <div className="burger" onClick={toggleNav}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}

export default Header;
