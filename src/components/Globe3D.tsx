import React, { useEffect, useRef } from 'react';

interface Globe3DProps {
  className?: string;
}

export function Globe3D({ className = '' }: Globe3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      
      const rect = canvas.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const radius = Math.min(centerX, centerY) * 0.8;
      
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Globe base circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Latitude lines
      for (let i = 1; i < 6; i++) {
        const y = centerY + Math.sin((i * Math.PI) / 6 - Math.PI/2) * radius;
        const ellipseRadius = Math.cos((i * Math.PI) / 6 - Math.PI/2) * radius;
        
        ctx.beginPath();
        ctx.ellipse(centerX, y, ellipseRadius, ellipseRadius * 0.2, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(34, 197, 94, ${0.2 - i * 0.02})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Longitude lines (rotating)
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4 + time;
        const x1 = centerX + Math.cos(angle) * radius;
        const y1 = centerY + Math.sin(angle) * radius * 0.3;
        const x2 = centerX - Math.cos(angle) * radius;
        const y2 = centerY - Math.sin(angle) * radius * 0.3;
        
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius, radius * 0.3, angle, 0, Math.PI);
        ctx.strokeStyle = `rgba(34, 197, 94, ${0.1 + Math.sin(time + i) * 0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Rotating dots (representing cities/connections)
      const dots = [
        { lat: 0.4, lon: 0.2, intensity: 1 },
        { lat: -0.3, lon: 0.8, intensity: 0.8 },
        { lat: 0.6, lon: -0.5, intensity: 0.9 },
        { lat: -0.2, lon: -0.3, intensity: 0.7 },
        { lat: 0.1, lon: 0.6, intensity: 0.6 },
      ];
      
      dots.forEach((dot, index) => {
        const rotatedLon = dot.lon + time * 0.5;
        const x = centerX + Math.cos(rotatedLon) * radius * Math.cos(dot.lat);
        const y = centerY + Math.sin(dot.lat) * radius * 0.8;
        const z = Math.sin(rotatedLon) * Math.cos(dot.lat);
        
        // Only draw dots on the front hemisphere
        if (z > -0.3) {
          const alpha = (z + 0.3) * dot.intensity;
          const size = 2 + Math.sin(time * 2 + index) * 1;
          
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34, 197, 94, ${alpha})`;
          ctx.fill();
          
          // Add glow effect
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
          gradient.addColorStop(0, `rgba(34, 197, 94, ${alpha * 0.5})`);
          gradient.addColorStop(1, 'rgba(34, 197, 94, 0)');
          
          ctx.beginPath();
          ctx.arc(x, y, size * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });
      
      // Connection lines between dots
      for (let i = 0; i < dots.length - 1; i++) {
        const dot1 = dots[i];
        const dot2 = dots[i + 1];
        
        const x1 = centerX + Math.cos(dot1.lon + time * 0.5) * radius * Math.cos(dot1.lat);
        const y1 = centerY + Math.sin(dot1.lat) * radius * 0.8;
        const z1 = Math.sin(dot1.lon + time * 0.5) * Math.cos(dot1.lat);
        
        const x2 = centerX + Math.cos(dot2.lon + time * 0.5) * radius * Math.cos(dot2.lat);
        const y2 = centerY + Math.sin(dot2.lat) * radius * 0.8;
        const z2 = Math.sin(dot2.lon + time * 0.5) * Math.cos(dot2.lat);
        
        if (z1 > -0.3 && z2 > -0.3) {
          const alpha = Math.min(z1, z2) + 0.3;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = `rgba(34, 197, 94, ${alpha * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      
      // Central glow
      const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      centerGradient.addColorStop(0, 'rgba(34, 197, 94, 0.1)');
      centerGradient.addColorStop(0.7, 'rgba(34, 197, 94, 0.05)');
      centerGradient.addColorStop(1, 'rgba(34, 197, 94, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = centerGradient;
      ctx.fill();
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ background: 'transparent' }}
    />
  );
}