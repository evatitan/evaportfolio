import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  const [isLastSection, setIsLastSection] = useState(false);

  const scrollToNextSection = () => {
    const sections = document.querySelectorAll('section');
    const currentPosition = window.scrollY;

    Array.from(sections).forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop;
      if (sectionTop > currentPosition) {
        (section as HTMLElement).scrollIntoView({ behavior: 'smooth' });
        // Stop further scrolling after the first match
        return false;
      }
    });
  };

  useEffect(() => {
    const checkScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      setIsLastSection(windowHeight + scrollTop >= documentHeight - 50);
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  if (isLastSection) return null;

  return (
    <div className="scroll-indicator" onClick={scrollToNextSection}>
      <FontAwesomeIcon icon={faChevronDown} className="scroll-arrow" />
    </div>
  );
};

export default ScrollIndicator;
