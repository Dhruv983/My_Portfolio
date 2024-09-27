import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <motion.div className="contact-section"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <motion.button type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Contact;
