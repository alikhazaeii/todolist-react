import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    class Particle {
      constructor(x, y, effect) {
        this.originX = x;
        this.originY = y;
        this.effect = effect;
        this.x = Math.floor(x);
        this.y = Math.floor(y);
        this.ctx = this.effect.ctx;
        this.vx = 0;
        this.vy = 0;
        this.ease = 0.5;
        this.friction = 0.95;
        this.dx = 0;
        this.dy = 0;
        this.distance = 0;
        this.force = 0;
        this.angle = 0;
        this.size = Math.floor(Math.random() * 3) + 1; 
      }
      draw() {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
      }
      update() {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = (-this.effect.mouse.radius / this.distance) * 8;

        if (this.distance < this.effect.mouse.radius) {
          this.angle = Math.atan2(this.dy, this.dx);
          this.vx += this.force * Math.cos(this.angle);
          this.vy += this.force * Math.sin(this.angle);
        }
        this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
        this.draw();
      }
    }

    class Effect {
      constructor(width, height, context) {
        this.width = width;
        this.height = height;
        this.ctx = context;
        this.particlesArray = [];
        this.gap = 20;
        this.mouse = {
          radius: 2500,
          x: 0,
          y: 0,
        };
        window.addEventListener('mousemove', (e) => {
          this.mouse.x = e.clientX * window.devicePixelRatio;
          this.mouse.y = e.clientY * window.devicePixelRatio;
        });
        window.addEventListener('resize', this.resize.bind(this));
        this.init();
      }
      resize() {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;

        this.width = canvas.width;
        this.height = canvas.height;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        this.particlesArray = [];
        this.init();
      }
      init() {
        for (let x = 0; x < this.width; x += this.gap) {
          for (let y = 0; y < this.height; y += this.gap) {
            this.particlesArray.push(new Particle(x, y, this));
          }
        }
      }
      update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (let i = 0; i < this.particlesArray.length; i++) {
          this.particlesArray[i].update();
        }
      }
    }

    const effect = new Effect(canvas.width, canvas.height, ctx);

    function animate() {
      effect.update();
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('mousemove', effect.mousemove);
      window.removeEventListener('resize', effect.resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full " />;
}
