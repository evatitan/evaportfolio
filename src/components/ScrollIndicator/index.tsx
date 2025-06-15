import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
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

  const scrollToTop = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* Safari support */
      ...(navigator.userAgent.indexOf('Safari') !== -1 && {
        behavior: 'auto',
      }),
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

  return (
    <div className="scroll-indicator" onClick={e => e.stopPropagation()}>
      {isLastSection ? (
        <FontAwesomeIcon icon={faChevronUp} className="scroll-arrow up" onClick={scrollToTop} />
      ) : (
        <FontAwesomeIcon
          icon={faChevronDown}
          className="scroll-arrow down"
          onClick={scrollToNextSection}
        />
      )}
    </div>
  );
};

export default ScrollIndicator;
