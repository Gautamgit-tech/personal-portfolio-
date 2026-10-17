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
            originX: x,
            originY: y,
            phase: Math.random() * Math.PI * 2,
          });
        }
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
      if (reducedMotion) draw();
    };

    const hideCursor = () => {
      cursorRef.current?.classList.remove("is-visible");
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      const timeOffset = reducedMotion ? 0 : time * 0.0015;

      points.forEach((point) => {
        point.x = point.originX + Math.sin(timeOffset + point.phase) * 7;
        point.y = point.originY + Math.cos(timeOffset + point.phase) * 7;
      });

      for (let first = 0; first < points.length; first += 1) {
        const point = points[first];
        let nearestCount = 0;
        for (let second = first + 1; second < points.length; second += 1) {
          const other = points[second];
          const distance = Math.hypot(point.x - other.x, point.y - other.y);
          if (distance < 170) {
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(48, 151, 198, ${0.2 * (1 - distance / 170)})`;
            context.lineWidth = 0.85;
            context.stroke();
            nearestCount += 1;
            if (nearestCount === 3) break;
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
        context.arc(point.x, point.y, nearPointer ? 2.4 : 1.4, 0, Math.PI * 2);
        context.fillStyle = nearPointer ? "rgba(107, 226, 255, 0.95)" : "rgba(52, 164, 211, 0.55)";
        context.fill();
      }

      if (!reducedMotion) frameId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    if (!reducedMotion) frameId = window.requestAnimationFrame(draw);
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