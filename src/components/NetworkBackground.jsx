import { useEffect, useRef } from "react";

const NetworkBackground = () => {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frameId;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    const particles = [];
    const pointer = { x: -1000, y: -1000 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.min(Math.floor(width / 32), 45);
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2.8 + 1,
          baseAlpha: Math.random() * 0.35 + 0.1,
          speed: Math.random() * 0.3 + 0.1,
          angle: Math.random() * Math.PI * 2,
        });
      }
    };

    const movePointer = (event) => {
      if (event.pointerType === "touch") return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pointer.x - 14}px, ${pointer.y - 14}px, 0)`;
        cursorRef.current.classList.add("is-visible");
      }

      if (reducedMotion) {
        draw();
      }
    };

    const hideCursor = () => {
      cursorRef.current?.classList.remove("is-visible");
      pointer.x = -1000;
      pointer.y = -1000;
      if (reducedMotion) {
        draw();
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        if (!reducedMotion) {
          p.y -= p.speed;
          p.x += Math.sin(p.angle) * 0.3;
          p.angle += 0.01;

          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
        }

        const dist = Math.hypot(p.x - pointer.x, p.y - pointer.y);
        const glow = dist < 140 ? (1 - dist / 140) * 0.5 : 0;

        context.beginPath();
        context.arc(p.x, p.y, p.radius * (1 + glow), 0, Math.PI * 2);
        context.fillStyle = `rgba(56, 189, 248, ${p.baseAlpha + glow})`;
        context.shadowColor = "rgba(56, 189, 248, 0.4)";
        context.shadowBlur = dist < 140 ? 12 : 0;
        context.fill();
        context.shadowBlur = 0;
      });

      if (!reducedMotion) {
        frameId = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    window.addEventListener("resize", () => {
      resize();
      if (reducedMotion) draw();
    });
    window.addEventListener("pointermove", movePointer, { passive: true });
    window.addEventListener("blur", hideCursor);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", movePointer);
      window.removeEventListener("blur", hideCursor);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="network-canvas" aria-hidden="true" />
      <div ref={cursorRef} className="cursor-orbit" aria-hidden="true" />
    </>
  );
};

export default NetworkBackground;