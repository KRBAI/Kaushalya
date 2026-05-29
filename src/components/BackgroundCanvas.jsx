import { useEffect, useRef } from 'react';

function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const particleCount = prefersReducedMotion ? 18 : 54;
    const mouse = { x: null, y: null, radius: 160 };
    let particles = [];
    let animationFrame = 0;

    const resizeCanvas = () => {
      const ratio = window.devicePixelRatio || 1;
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth * ratio;
      canvas.height = innerHeight * ratio;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
      }

      update() {
        if (this.x > canvas.width / window.devicePixelRatio || this.x < 0) {
          this.directionX = -this.directionX;
        }

        if (this.y > canvas.height / window.devicePixelRatio || this.y < 0) {
          this.directionY = -this.directionY;
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            if (mouse.x < this.x) this.x += 2.5;
            if (mouse.x > this.x) this.x -= 2.5;
            if (mouse.y < this.y) this.y += 2.5;
            if (mouse.y > this.y) this.y -= 2.5;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const initParticles = () => {
      particles = [];
      const width = window.innerWidth;
      const height = window.innerHeight;

      for (let index = 0; index < particleCount; index += 1) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (width - size * 2) + size;
        const y = Math.random() * (height - size * 2) + size;
        const directionX = Math.random() * 0.35 - 0.175;
        const directionY = Math.random() * 0.35 - 0.175;
        particles.push(new Particle(x, y, directionX, directionY, size, 'rgba(96, 165, 250, 0.3)'));
      }
    };

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a += 1) {
        for (let b = a; b < particles.length; b += 1) {
          const xDistance = particles[a].x - particles[b].x;
          const yDistance = particles[a].y - particles[b].y;
          const distanceSquared = xDistance * xDistance + yDistance * yDistance;

          if (distanceSquared < (window.innerWidth / 9) * (window.innerHeight / 9)) {
            const opacity = 1 - distanceSquared / 15000;
            context.strokeStyle = `rgba(148, 163, 184, ${opacity * 0.25})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(particles[a].x, particles[a].y);
            context.lineTo(particles[b].x, particles[b].y);
            context.stroke();
          }
        }
      }
    };

    const animate = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach((particle) => particle.update());
      connectParticles();
      animationFrame = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    resizeCanvas();
    initParticles();

    if (!prefersReducedMotion) {
      animate();
    } else {
      connectParticles();
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-canvas" aria-hidden="true" />;
}

export default BackgroundCanvas;