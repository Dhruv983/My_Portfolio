import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    <motion.div className="about-section"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <p>
      Results-driven Software Developer with a master’s in computer science from Memorial University, I specialize in full stack development, systems analysis, and database management. My technical expertise spans Java (Spring Boot, Hibernate), JavaScript (React, Angular), and database technologies such as MySQL and PostgreSQL. I have a strong track record in DevOps, CI/CD pipelines, and automation, utilizing tools like Docker, Jenkins, Selenium, JUnit, and Postman to ensure robust software delivery. In my previous role at Tata Consultancy Services, I contributed to system optimization, integrating testing solutions, and maintaining production environments. With experience in Agile methodologies, backend and frontend development, and performance troubleshooting.
      </p>
    </motion.div>
  );
};

export default About;
