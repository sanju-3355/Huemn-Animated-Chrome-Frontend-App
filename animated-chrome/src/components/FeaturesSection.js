import React from 'react';

function FeaturesSection() {
  return (
    <section className="features-section">
      <h2>Make it <span className="highlight">yours</span> and take it with you</h2>
      <div className="blue-banner">
        <nav>
          <ul>
            <li>Updates</li>
            <li>Yours</li>
            <li>Safe</li>
            <li>Fast</li>
            <li>By Google</li>
            <li><button>Download</button></li>
          </ul>
        </nav>
        <h3>Take your browser with you</h3>
        <p>Download Chrome on your mobile device or tablet and sign into your account for the same browser experience, everywhere.</p>
        <button className="download-btn">Download Chrome</button>
        <div className="qr-code">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSo1TY8WIttz1a84hfX9QekgytK0-OqQPoiQ&s" alt="QR code" />
          <p>Get Chrome for your phone</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
