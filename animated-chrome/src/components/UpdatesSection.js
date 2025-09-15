import React from 'react';
import '../styles/UpdatesSection.scss';

const UpdatesSection = () => {
  
  return (
    <div className="updates-container">
      <h2>Discover the latest updates from Chrome</h2>
      <div className="cards">
        {['Update 1: Enhanced Security', 'Update 2: New Extensions', 'Update 3: Performance Improvements'].map((title, index) => (
          <div className="card" key={index}>
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>
      <div className="illustration">
        <img src="https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHNjYXBlfGVufDB8fDB8fHww" alt="Chrome Updates" />
      </div>
    </div>
  );
};

export default UpdatesSection;
