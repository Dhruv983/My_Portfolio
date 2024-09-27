import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "VacLab (Mitacs)",
      role: "Software Developer (Co-op)",
      duration: "May 2023 – Dec 2023",
      description: `
        - Developed a flight path visualization XR application in Unreal Engine for Microsoft HoloLens 2.
        - Implemented a user interface using UMG and integrated hand tracking for intuitive path manipulation.
        - Ported the system to be compatible with Avalon Holographic's light field display.
        - Implemented cross-platform multi-user state synchronization using Socket.IO.
        - Developed crash detection simulations using real-time data integration, improving air traffic control efficiency.
      `,
      technologies: "Unreal Engine, UMG, Socket.IO, Microsoft HoloLens 2"
    },
    {
      company: "Tata Consultancy Services",
      role: "Assistant System Engineer",
      duration: "July 2021 – July 2022",
      description: `
        - Collaborated with two teams to ensure software quality.
        - Developed automated test scripts using Robot Framework, Selenium, and integrated them into the CI/CD pipeline.
        - Performed API testing with Postman and created automated test suites using JUnit, Selenium, and Jenkins.
        - Enhanced software stability by validating critical functionalities.
      `,
      technologies: "Robot Framework, Selenium, ALM, Postman, JUnit, Jenkins"
    },
    {
      company: "M-intellect Global Pvt. Ltd",
      role: "Machine Learning Intern",
      duration: "June 2019 – August 2019",
      description: `
        - Eliminated 95% of data issues in Google Play Store reviews using Python and Pandas.
        - Enhanced machine learning model accuracy by 20% using Scikit-Learn and TensorFlow, reaching 85% accuracy.
        - Developed impactful data visualizations for better stakeholder understanding.
      `,
      technologies: "Python, Pandas, Scikit-Learn, TensorFlow"
    }
  ];

  return (
    <div className="experience-section">
      <h2>Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.company}</h3>
            <h4>{exp.role} | {exp.duration}</h4>
            <p>{exp.description.split('\n').map((line, i) => (
              <span key={i}>
                {line}<br/>
              </span>
            ))}</p>
            <p><strong>Technologies:</strong> {exp.technologies}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
