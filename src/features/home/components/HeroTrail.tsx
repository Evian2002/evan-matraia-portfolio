import { useEffect, useRef } from "react";

export function HeroTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<{ x: number; y: number; age: number }[]>([]);
  const colorRef = useRef("62, 100, 220");

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const style = getComputedStyle(document.documentElement);
    const primary = style.getPropertyValue("--primary").trim();
    if (primary) {
      const match = primary.match(/[\d.]+/g);
      if (match && match.length >= 3) {
        const [l, c, h] = match.map(Number);
        const rgb = oklchToSrgb(l, c, h);
        colorRef.current = `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`;
      }
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = container!.clientWidth;
      const h = container!.clientHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
    }

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      const r = container!.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (x < 0 || y < 0 || x > r.width || y > r.height) return;
      const trail = trailRef.current;
      trail.push({ x, y, age: 0 });
      if (trail.length > 40) trail.splice(0, trail.length - 40);
    };

    document.addEventListener("mousemove", onMouse);

    let animId: number;

    function animate() {
      const dpr = window.devicePixelRatio || 1;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, container!.clientWidth, container!.clientHeight);

      const trail = trailRef.current;

      for (let i = trail.length - 1; i >= 0; i--) {
        trail[i].age++;
      }

      while (trail.length > 0 && trail[0].age > 25) {
        trail.shift();
      }

      if (trail.length < 3) {
        animId = requestAnimationFrame(animate);
        return;
      }

      const color = colorRef.current;

      for (let i = 1; i < trail.length; i++) {
        const t = i / trail.length;
        const age = trail[i].age;
        const fade = Math.max(0, 1 - age / 25);
        const alpha = t * fade * 0.7;
        const width = 2 + t * 4;

        ctx!.beginPath();
        ctx!.moveTo(trail[i - 1].x, trail[i - 1].y);
        ctx!.lineTo(trail[i].x, trail[i].y);
        ctx!.strokeStyle = `rgba(${color}, ${alpha})`;
        ctx!.lineWidth = width;
        ctx!.lineCap = "round";
        ctx!.lineJoin = "round";
        ctx!.stroke();
      }

      for (let i = 0; i < trail.length; i += 3) {
        const t = i / trail.length;
        const age = trail[i].age;
        const fade = Math.max(0, 1 - age / 25);
        const alpha = t * fade * 0.3;
        const radius = 3 + t * 6;

        const grad = ctx!.createRadialGradient(
          trail[i].x, trail[i].y, 0,
          trail[i].x, trail[i].y, radius,
        );
        grad.addColorStop(0, `rgba(${color}, ${alpha * 0.5})`);
        grad.addColorStop(1, `rgba(${color}, 0)`);

        ctx!.beginPath();
        ctx!.arc(trail[i].x, trail[i].y, radius, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.fill();
      }

      animId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      ro.disconnect();
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="pointer-events-none block" />
    </div>
  );
}

function oklchToSrgb(l: number, c: number, h: number): [number, number, number] {
  const a = c * Math.cos((h * Math.PI) / 180);
  const b = c * Math.sin((h * Math.PI) / 180);

  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.291485548 * b;

  const l3 = l_ * l_ * l_;
  const m3 = m_ * m_ * m_;
  const s3 = s_ * s_ * s_;

  const r = 4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
  const g = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
  const b_ = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.707614701 * s3;

  return [
    Math.round(Math.max(0, Math.min(255, r * 255))),
    Math.round(Math.max(0, Math.min(255, g * 255))),
    Math.round(Math.max(0, Math.min(255, b_ * 255))),
  ];
}
