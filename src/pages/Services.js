//Mariya Ann Moncy
//301428373
//24-05-2024


import React from 'react';
import './Services.css'; // Assuming you have some CSS for styling

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and interactive websites using modern technologies.',
      image: require('../images/web-development.jpg')
    },
    {
      title: 'Mobile App Development',
      description: 'Creating user-friendly mobile applications for both iOS and Android platforms.',
      image: require('../images/mobile-app-development.jpg')
    },
    {
      title: 'API Integration',
      description: 'Integrating third-party APIs to enhance the functionality of your applications.',
      image: require('../images/api-integration.jpg')
    },
    {
      title: 'Database Management',
      description: 'Designing and managing efficient and scalable databases for your applications.',
      image: require('../images/database-management.jpg')
    }
  ];

  return (
    <div className="services">
      <h1>Services</h1>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.image} alt={service.title} className="service-image" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
