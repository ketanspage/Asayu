import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import GetStarted from './pages/GetStarted'; 
import Brand from './pages/Brand';
import './App.css';

function App() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    padding: '10px',
  };
  const navbarStyle = {
    backgroundColor: 'indigo',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  };
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };
  const contentStyle = {
    flex: 1,
  };
  const footerStyle = {
    backgroundColor: 'indigo',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  };
  const listItemStyle = {
    margin: '0',
    padding: '0',
  };

  return (
    <Router>
      <div className="App" style={containerStyle}>
        <nav style={navbarStyle}>
          <ul style={{ listStyleType: 'none', margin: '0', padding: '0', display: 'flex' }}>
            <li style={listItemStyle}>
              <Link to="/" style={linkStyle}>
                Creator
              </Link>
            </li>
            <li style={listItemStyle}>
              <Link to="/brand" style={linkStyle}>
                brand
              </Link>
            </li>
            <li style={listItemStyle}>
              <Link to="/about" style={linkStyle}>
                About
              </Link>
            </li>
            <li style={listItemStyle}>
              <a href="https://example.com" target="_blank" style={linkStyle}>
                Get Started
              </a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Creator />} />
          <Route path="/brand" element={<Brands/>}/>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/GetStarted" element={<GetStarted />} /> {/* Add the new page route */}
        </Routes>
        <div style={contentStyle}>
          {/* Content goes here */}
        </div>
        <footer style={footerStyle}>
          <ul style={{ listStyleType: 'none', margin: '0', padding: '0', display: 'flex' }}>
            <li style={listItemStyle}>
              <Link to="/" style={linkStyle}>
                Creator
              </Link>
            </li>
            <li style={listItemStyle}>
              <Link to="/about" style={linkStyle}>
                About
              </Link>
            </li>
            <li style={listItemStyle}>
              <Link to="/about" style={linkStyle}>
                Brand
              </Link>
            </li>
            <li style={listItemStyle}>
              <Link to="/about" style={linkStyle}>
                Get Started
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </Router>
  );
}

function Creator() {
  return (
    <div>
      <Home />
    </div>
  );
}
function Brands() {
  return (
    <div>
      <Brand />
    </div>
  );
}


function AboutUs() {
  return (
    <div>
      <About />
    </div>
  );
}

export default App;
