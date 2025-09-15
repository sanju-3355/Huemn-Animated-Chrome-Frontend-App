import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdLdTqnpNp4WS6X9kLgu5D_9wITor1brYsndXsFnwmO9IKp1dfrVGj7mPZp7UM3OtzQY&usqp=CAU' alt='chrome' />
        chrome
      </div>
      <nav>
        <ul>
          <li>Safety</li>
          <li>By Google</li>
          <li><a href="#">Extensions ↗</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
