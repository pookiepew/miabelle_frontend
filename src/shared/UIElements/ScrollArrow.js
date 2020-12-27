import { useState, useEffect } from 'react';

import upArrow from '../../assets/icons/arrow-up.png';

import './css/ScrollArrow.css';

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <img
      className='scrollTop'
      alt='Upwards arrow'
      src={upArrow}
      onClick={scrollTop}
      style={{ display: showScroll ? 'flex' : 'none' }}
    />
  );
};

export default ScrollArrow;
