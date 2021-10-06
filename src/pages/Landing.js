import React from "react";
import './styles/pages.css';
import casual from '../images/casual.png';

function Landing() {
  return (
    <div className='main shortPage'>
        <h3>Hi, I'm Kelly. I'm a web developer.</h3>
        <h4>I specialize in building data-rich web applications with clean intuitive user interfaces.</h4>
        <img className='mobileLanding' src={casual} alt="Kelly"/>
    </div>
  );
}

export default Landing;