import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience'; // New Experience Section
import Footer from './components/Footer'; // Footer with Download Resume Button

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />  {/* Experience section */}
      <Footer />      {/* Download Resume Button in Footer */}
    </div>
  );
}

export default App;
