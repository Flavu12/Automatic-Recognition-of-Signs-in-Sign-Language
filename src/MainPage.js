import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; 
import './CSS/Header.css';

function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="main-page">
      <header className="header-main">
        <button className="menu-button" onClick={toggleMenu}>☰</button>
        {menuOpen && (
          <div className="vertical-menu">
            <h2>Lessons</h2>
            <ul>
              <li><Link to="/letters">Letters</Link></li>
              <li><Link to="/numbers">Numbers</Link></li>
              <li><Link to="/colors">Colors</Link></li>
              <li><Link to="/animals">Animals</Link></li>
              <li><Link to="/expression">Expression</Link></li>
              <li><Link to="/family">Family</Link></li>
            </ul>
          </div>
        )}
        <div className="icons">
          <button className="icon-button"><Link to="/camera" >
          <img src="/images/icon-camera.png" alt="Camera button" className="camera-icon" /></Link></button>
        </div>
      </header>

      <main className="content">
          <h1>Welcome to Learning Sign Language!</h1>
          <div id="bottom">
            <p>
              Explore the basics of sign language and start communicating in a new way. This site offers step-by-step guides and an interactive feature that lets you open your camera to recognize and practice signs in real time.
            </p>
            <div className="illustration">
              <img src='../images/sign-language.png' alt="Sign language illustration" />
            </div>
          </div>
        </main>
      </div>
  );
}

export default MainPage;
