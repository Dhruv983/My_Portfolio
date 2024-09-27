import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Go']
    },
    {
      category: 'Frameworks and Libraries',
      items: ['Spring Boot', 'React.js', 'Angular', 'Vue.js', 'Node.js', 'Django']
    },
    {
      category: 'Cloud and DevOps',
      items: ['AWS (EC2, Lambda, RDS)', 'Azure', 'Docker', 'Jenkins', 'CI/CD']
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'Jira', 'Confluence', 'Postman']
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle']
    }
  ];

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3>{skillCategory.category}</h3>
            <ul>
              {skillCategory.items.map((skill, i) => (
                <li key={i} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
