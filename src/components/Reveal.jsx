import { useEffect, useRef, useState } from 'react';

function Reveal({ children, className = '', delay = 0, as: Component = 'div' }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return undefined;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={elementRef}
      className={`reveal ${isVisible ? 'reveal-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

export default Reveal;