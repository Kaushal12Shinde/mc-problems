import React, { useEffect, useState } from 'react';
import './scrollcomponent.css';

function ScrollComponent() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / windowHeight) * 100;

      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      
      <div className="content">
        <h1>Scroll down to fill the progress bar</h1>
        <p>This is a scrolling component with a height of 600vh.</p>
        <p>Keep scrolling to see the progress bar fill up as you scroll!</p>
        <p>There is enough space for you to scroll 600vh.</p>
        {/* Additional content to simulate a long scroll */}
      </div>
    </div>
  );
}

export default ScrollComponent;
