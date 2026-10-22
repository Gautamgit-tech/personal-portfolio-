import { useEffect, useRef } from "react";

const NetworkBackground = () => {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const points = [];
    const pointer = { x: -1000, y: -1000 };
    let frameId;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let previousFrameTime = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const columns = Math.ceil(width / 112);
      const rows = Math.ceil(height / 108);
      points.length = 0;
      for (let row = 0; row <= rows; row += 1) {
        for (let column = 0; column <= columns; column += 1) {
          const x = (column + Math.random() * 0.7) * (width / columns);
          const y = (row + Math.random() * 0.7) * (height / rows);
          points.push({
            x,
            y,
            velocityX: (Math.random() - 0.5) * 0.045,
            velocityY: (Math.random() - 0.5) * 0.045,
            connected: Math.random() > 0.32,
          });
        }
      }
      previousFrameTime = 0;
    };

    const movePointer = (event) => {
      if (event.pointerType === "touch") return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pointer.x - 14}px, ${pointer.y - 14}px, 0)`;
        cursorRef.current.classList.add("is-visible");
      }
      if (reducedMotion) draw();
    };

    const hideCursor = () => {
      cursorRef.current?.classList.remove("is-visible");
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      const elapsed = previousFrameTime
        ? Math.min(time - previousFrameTime, 40)
        : 16;
      previousFrameTime = time;

      points.forEach((point) => {
        if (reducedMotion) return;
        point.x += point.velocityX * elapsed;
        point.y += point.velocityY * elapsed;

        if (point.x < 0 || point.x > width) {
          point.velocityX *= -1;
          point.x = Math.max(0, Math.min(point.x, width));
        }
        if (point.y < 0 || point.y > height) {
          point.velocityY *= -1;
          point.y = Math.max(0, Math.min(point.y, height));
        }
      });

      for (let first = 0; first < points.length; first += 1) {
        const point = points[first];
        let nearestCount = 0;
        if (point.connected) {
          for (let second = first + 1; second < points.length; second += 1) {
            const other = points[second];
            if (!other.connected) continue;
            const distance = Math.hypot(point.x - other.x, point.y - other.y);
            if (distance < 145) {
              context.beginPath();
              context.moveTo(point.x, point.y);
              context.lineTo(other.x, other.y);
              context.strokeStyle = `rgba(48, 151, 198, ${0.22 * (1 - distance / 145)})`;
              context.lineWidth = 0.85;
              context.stroke();
              nearestCount += 1;
              if (nearestCount === 2) break;
            }
          }
        }

        const pointerDistance = Math.hypot(point.x - pointer.x, point.y - pointer.y);
        if (pointerDistance < 190) {
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(pointer.x, pointer.y);
          context.strokeStyle = `rgba(71, 205, 255, ${0.42 * (1 - pointerDistance / 190)})`;
          context.lineWidth = 1;
          context.stroke();
        }

        const nearPointer = pointerDistance < 190;
        context.beginPath();
        context.arc(point.x, point.y, nearPointer ? 2.4 : point.connected ? 1.6 : 1.2, 0, Math.PI * 2);
        context.fillStyle = nearPointer
          ? "rgba(107, 226, 255, 0.95)"
          : point.connected
            ? "rgba(52, 164, 211, 0.65)"
            : "rgba(125, 170, 190, 0.38)";
        context.fill();
      }

      if (!reducedMotion) frameId = window.requestAnimationFrame(draw);
    };
    resize();
    draw();
    draw();
    window.addEventListener("resize", resize);
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