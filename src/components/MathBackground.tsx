import React, { useEffect, useRef } from "react";

class Particle {
  type: "num" | "op";
  value: string | number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  glow: number;
  isDragged: boolean;

  constructor(width: number, height: number, type: "num" | "op", value: string | number | null = null) {
    this.type = type;
    this.value = value !== null ? value : (type === "num" ? Math.floor(Math.random() * 9) + 1 : ["+", "-", "*", "/"][Math.floor(Math.random() * 4)]);
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 1.2;
    this.vy = (Math.random() - 0.5) * 1.2;
    this.radius = 20;
    this.glow = 0;
    this.isDragged = false;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.isDragged ? 0.8 : (this.type === "num" ? 0.25 : 0.45);
    ctx.fillStyle = (this.glow > 0 || this.isDragged) ? "#D4AF37" : "#FFFFFF";
    ctx.shadowBlur = this.isDragged ? 15 : this.glow;
    ctx.shadowColor = "#3B82F6";
    ctx.font = `${this.isDragged ? "24px" : (this.type === "num" ? "14px" : "20px")} Inter`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(String(this.value), this.x, this.y);
    ctx.restore();
    if (this.glow > 0) this.glow -= 0.5;
  }

  update(width: number, height: number, mouse: { x: number; y: number }) {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 80) {
      this.isDragged = true;
      this.x -= (this.x - mouse.x) * 0.08;
      this.y -= (this.y - mouse.y) * 0.08;
      this.vx = (Math.random() - 0.5) * 1.5;
      this.vy = (Math.random() - 0.5) * 1.5;
    } else {
      this.isDragged = false;
      this.x += this.vx;
      this.y += this.vy;
    }

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }
}

export const MathBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let opCount = 0;
    const MAX_OPS = 40;
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();

    const initParticles = () => {
      particles = [];
      opCount = 0;
      for (let i = 0; i < 50; i++) particles.push(new Particle(canvas.width, canvas.height, "num"));
      for (let i = 0; i < 15; i++) particles.push(new Particle(canvas.width, canvas.height, "op"));
    };

    const handleCollisions = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          if (!p1 || !p2) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 30) {
            if (p1.type === "num" && p2.type === "num") {
              // Colisão de números realiza soma
              const val1 = typeof p1.value === "number" ? p1.value : parseInt(String(p1.value)) || 1;
              const val2 = typeof p2.value === "number" ? p2.value : parseInt(String(p2.value)) || 1;
              p1.value = Math.min(999, val1 + val2);
              p1.glow = 15;
              particles.splice(j, 1);
              opCount++;
            } else if ((p1.type === "op" && p2.type === "num") || (p2.type === "op" && p1.type === "num")) {
              const op = p1.type === "op" ? p1 : p2;
              const num = p1.type === "num" ? p1 : p2;
              let nearest: Particle | null = null;
              let minDist = 1000;

              particles.forEach((p) => {
                if (p.type === "num" && p !== num) {
                  const d = Math.sqrt(Math.pow(p.x - op.x, 2) + Math.pow(p.y - op.y, 2));
                  if (d < minDist) {
                    minDist = d;
                    nearest = p;
                  }
                }
              });

              if (nearest && minDist < 100) {
                const opVal = String(op.value);
                const numVal = typeof num.value === "number" ? num.value : parseInt(String(num.value)) || 1;
                const nearVal = typeof (nearest as Particle).value === "number" ? (nearest as Particle).value as number : parseInt(String((nearest as Particle).value)) || 1;
                
                let res = 1;
                if (opVal === "+") res = numVal + nearVal;
                else if (opVal === "-") res = Math.abs(numVal - nearVal);
                else if (opVal === "*") res = numVal * nearVal;
                else if (opVal === "/") res = Math.floor(numVal / (nearVal || 1));

                num.value = Math.min(999, res || 1);
                num.glow = 20;
                
                // Remove o operador e o outro número
                particles = particles.filter((p) => p !== op && p !== nearest);
                opCount++;
              }
            }
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Desenha conexões suaves entre partículas próximas
      ctx.strokeStyle = "rgba(59, 130, 246, 0.05)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update(canvas.width, canvas.height, mouse);
        p.draw(ctx);
      });

      handleCollisions();

      if (opCount > MAX_OPS || particles.filter((p) => p.type === "num").length < 8) {
        initParticles();
      }

      animationId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="net-canvas" />;
};
