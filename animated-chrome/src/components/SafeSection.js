

import React from 'react';
import { motion } from 'framer-motion';

function SafeSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    })
  };

  const cards = [
    {
      title: "Password Manager",
      desc: "Use strong passwords on every site.",
      className: "blue",
      img: "https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFzc3dvcmR8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Safety Check",
      desc: "Check your safety level in real time with just one click.",
      className: "light-blue",
    },
    {
      title: "Enhanced Safe Browsing",
      desc: "Browse with the confidence that you're staying safer online.",
      className: "white",
    },
    {
      title: "Privacy Guide",
      desc: "Keep your privacy under your control with easy-to-use settings.",
      className: "dark-blue",
      img: "https://plus.unsplash.com/premium_photo-1700681802465-63aae555de29?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByaXZhY3l8ZW58MHx8MHx8fDA%3D",
    }
  ];

  return (
    <section className="safe-section">
      <h2>
        Stay <span className="highlight">safe</span><br />
        while you browse
      </h2>

      <div className="cards">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`card ${card.className}`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <h4>{card.title}</h4>
            <h3>{card.desc}</h3>
            {card.img && <img src={card.img} alt={card.title} />}
            <button>+</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SafeSection;
