import React from 'react'

function Footer() {
    const footerStyle = {
        backgroundColor: 'indigo',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
      };
    
      const linkStyle = {
        textDecoration: 'none',
        color: 'white',
        padding: '10px',
      };
    
      return (
        <footer style={footerStyle}>
          <ul style={{ listStyleType: 'none', margin: '0', padding: '0', display: 'flex' }}>
            <li>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/integration" style={linkStyle}>
                About
              </Link>
            </li>
          </ul>
        </footer>
        
      );
}

export default Footer
