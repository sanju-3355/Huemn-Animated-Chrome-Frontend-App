import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTah2OEn3HRV_0JfHSG-VkKpPqdYQkJ-vC6JK9bRsVudz0Mp-LPTSMUXPyHqQXW0dB6zxk&usqp=CAU" alt="Chrome logo" className="hero-logo" />
      <h1>The browser built to be yours</h1>
      <button className="download-btn">Download Chrome</button>
      <p className="update-link">I want to update Chrome</p>
      <div className="qr-code">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSo1TY8WIttz1a84hfX9QekgytK0-OqQPoiQ&s" alt="QR code" />
        <p>Get Chrome for your phone</p>
      </div>
    </section>
  );
}

export default HeroSection;
