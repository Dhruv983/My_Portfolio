import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Header.css';
import profilePic from '../assets/profile.jpg';  // Import your profile picture

const Header = () => {
  return (
    <motion.div 
      className="header-section" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className="header-content">
        <img src={profilePic} alt="Dhruv Pualsa" className="profile-pic" />
        <div className="text-content">
          <h1>Dhruv Pualsa</h1>
          <p>Full Stack Developer specializing in Java, Spring Boot, React & AWS</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
