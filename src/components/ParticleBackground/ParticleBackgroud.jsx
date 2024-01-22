// ParticleComponent.js
import React, { useEffect } from 'react';

const ParticleBackgroud = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.particlesJS('particles-js', {
        // Particle.js configuration options go here
        particles: {
          number: {
            value: 70,
          },
          size: {
            value: 2,
          },
          color: {
            value: '#CFD3D8',
          },
        },
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="particles-js" style={{ position: 'fixed', width: '100%', height: '100%' }} />;
};

export default ParticleBackgroud;
