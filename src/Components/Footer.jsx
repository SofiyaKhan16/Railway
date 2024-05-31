import React from 'react';
import image from '../assets/logoheadway.png';
import { Link } from "react-scroll";

function Footer() {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '-20px',
    backgroundColor: '#f7f3f2',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    flexWrap: 'wrap',
    marginBottom:'1px'
  };

  const sectionStyle = {
    margin: '20px',
    textAlign: 'center',
  };

  const logoStyle = {
    width: '200px',
    marginBottom: '-40px',
  };

  const textStyle = {
    fontSize: '25px',
    margin: '5px 0',
    color:'black',
    marginTop:'40px'
  };

  const linkStyle = {
    fontSize: '25px',
    fontFamily:'sans-serif',
    margin: '10px 0',
    cursor: 'pointer',
    transition: 'color 0.3s',
    color:'black'
  };

  const linkHoverStyle = {
    color: '#1e90ff',
  };

  const buttonStyle = {
    border: '1px solid black',
    padding: '10px 20px',
    backgroundColor: '#bfdbfe',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    color:'black',
    borderRadius:'15px',
    fontSize:'25px'
  };

  const buttonHoverStyle = {
    backgroundColor: '#fff',
    color: '#333',
  };

  return (
    <footer style={footerStyle} >
      <div style={sectionStyle}>
        <img src={image} alt='Logo' style={{...logoStyle,marginBottom:'-75px',marginLeft:'40px'}}/>
        <p style={{...textStyle}}>Copyright©2024 Vaishnavi Rail</p>
        <p style={{...textStyle,marginTop:'-5px'}}>All rights reserved</p>
      </div>
      <div style={sectionStyle}>
        <p id="home" style={{...linkStyle,marginTop:'160px',color:'black'}} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = 'black'}> <Link to='home'>Home</Link></p>
        <p style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = 'black'} ><Link to='about'>About us</Link></p>
        <p style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}  onMouseOut={(e) => e.target.style.color = 'black'}><Link to='service'>Services Us</Link></p>
        <p style={{...linkStyle,marginBottom:'80px'}} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}  onMouseOut={(e) => e.target.style.color = 'black'}><Link to='career'>Career</Link></p>
      </div>
      <div style={sectionStyle}>
        <button 
          style={buttonStyle} 
          onMouseOver={(e) => {
            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.target.style.color = buttonHoverStyle.color;
          }} 
          onMouseOut={(e) => {
            e.target.style.backgroundColor = buttonStyle.backgroundColor;
            e.target.style.color = buttonStyle.color;
          }}
        >
          Contact Us
        </button>
      </div>
    </footer>
  );
}

export default Footer;