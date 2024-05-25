//Mariya Ann Moncy
//301428373
//24-05-2024


import React from 'react';
import './Projects.css'; 

const Projects = () => {
  const projectList = [
    {
      title: 'E-commerce Website',
      description: 'An e-commerce website with user authentication, product listings, shopping cart, and checkout functionality. Integrated with Stripe for payment processing.',
      technologies: 'React, Redux, Node.js, Express, MongoDB, Stripe API',
      image: require('../images/ecommerce.jpg') 
    },
    {
      title: 'Weather App',
      description: 'A weather forecasting app that fetches data from a weather API and displays current weather conditions, forecasts, and weather maps.',
      technologies: 'React, OpenWeatherMap API, CSS',
      image: require('../images/weather.jpg') 
    },
    {
      title: 'Recipe Finder',
      description: 'A recipe finder app where users can search for recipes based on ingredients. Provides detailed recipes and cooking instructions.',
      technologies: 'React, Spoonacular API, CSS',
      image: require('../images/recipe.jpg') // Corrected path
    }
  ];

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies Used:</strong> {project.technologies}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
