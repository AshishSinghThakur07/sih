import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports touch or reduced motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('interactive-hover'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference rounded-full bg-[#F58220] transition-transform duration-75 ease-out"
        style={{
          width: isHovered ? '12px' : '8px',
          height: isHovered ? '12px' : '8px',
          transform: `translate3d(${position.x - (isHovered ? 6 : 4)}px, ${position.y - (isHovered ? 6 : 4)}px, 0)`,
        }}
      />
      {/* Outer Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#F58220]/60 transition-all duration-300 ease-out"
        style={{
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          transform: `translate3d(${position.x - (isHovered ? 24 : 16)}px, ${position.y - (isHovered ? 24 : 16)}px, 0)`,
          backgroundColor: isHovered ? 'rgba(245, 130, 32, 0.1)' : 'transparent',
          borderColor: isHovered ? '#2E9E45' : 'rgba(245, 130, 32, 0.4)',
        }}
      />
    </>
  );
};
