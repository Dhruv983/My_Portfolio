import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Spring PetClinic Application – Full Stack Development",
      techStack: "Java, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, Thymeleaf, HTML, CSS, JavaScript, MySQL, Maven, Git",
      description: `
        - Developed a full-stack web application for managing veterinary clinic operations using the Spring framework.
        - Built RESTful APIs with Spring Boot and Spring MVC; implemented data persistence with Spring Data JPA and Hibernate.
        - Designed and managed relational database schemas with MySQL.
        - Developed responsive interfaces using Thymeleaf, HTML, CSS, and JavaScript.
        - Wrote unit and integration tests using JUnit and Mockito.
        - Managed builds with Maven and version control with Git.
      `,
      link: "https://github.com/Dhruv983/pet-clinic" 
    },
    {
      title: "Quiz Web Application – Full Stack Development",
      techStack: "Node.js, Express.js, Prisma, Nunjucks, Passport.js, SQLite, Cypress, JavaScript, HTML, CSS, Git",
      description: `
        - Contributed to the development of a full-stack quiz web application.
        - Built RESTful APIs with Express.js and implemented data persistence using Prisma ORM.
        - Designed and managed relational database schemas using SQLite and Prisma.
        - Developed server-side rendered pages using Nunjucks, enhanced with HTML and CSS.
        - Implemented user authentication using Passport.js with session-based login.
        - Wrote end-to-end tests using Cypress for automated testing of user interactions.
        - Managed version control with Git and automated testing workflows with Cypress.
      `,
      link: "https://github.com/MUN-COMP6905/project-fteam" 
    },
    {
      title: "Whole Image Cancer Detection Using Patch-Based Approach",
      techStack: "Python, PyTorch, TensorFlow, Keras, OpenCV, ResNet-50, CBIS-DDSM dataset, Data Augmentation, Jupyter Notebooks, Matplotlib",
      description: `
        - Developed a machine learning model to detect breast cancer from mammogram images using a patch-based analysis approach.
        - Leveraged the large CBIS-DDSM dataset and preprocessed images into smaller patches for targeted analysis.
        - Fine-tuned a pre-trained ResNet-50 model to improve detection accuracy.
        - Employed advanced image processing, deep learning techniques, and heatmap generation to visualize model predictions.
        - Ensured model robustness through comprehensive performance evaluation metrics, enhancing diagnostic precision in medical imaging.
      `,
      //link: "https://github.com/YourGitHub/CancerDetectionApp" 
    }
  ];

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p><strong>Technologies:</strong> {project.techStack}</p>
            <p>{project.description.split('\n').map((line, i) => (
              <span key={i}>
                {line}<br />
              </span>
            ))}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
