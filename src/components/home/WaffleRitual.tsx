import { useEffect, useRef, useState } from 'react';

const pieces = [
  { className: 'waffle-piece waffle-piece-sprinkle', start: [-105, -18], end: [-250, -52], rotate: -10 },
  { className: 'waffle-piece waffle-piece-chocolate', start: [-34, -34], end: [-48, -112], rotate: -4 },
  { className: 'waffle-piece waffle-piece-fruit', start: [105, -18], end: [250, -52], rotate: 10 },
  { className: 'waffle-piece waffle-piece-cookie', start: [-78, 30], end: [-190, 76], rotate: 8 },
  { className: 'waffle-piece waffle-piece-strawberry', start: [78, 30], end: [190, 76], rotate: -8 },
] as const;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function WaffleRitual() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const travel = Math.max(window.innerHeight * 0.75, rect.height * 0.5);
        setProgress(clamp((window.innerHeight * 0.72 - rect.top) / travel, 0, 1));
      });
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const spreadFactor = clamp(window.innerWidth / 1180, 0.72, 1);

  return (
    <div ref={sectionRef} className="waffle-ritual" aria-label="Wysteria tatlı bir mola">
      <div className="waffle-blob" aria-hidden="true" />
      <span className="waffle-ritual-line waffle-ritual-line-left" aria-hidden="true" />
      <div className="waffle-ritual-center">
        <span className="waffle-ritual-kicker">Birlikte güzel</span>
        <span className="waffle-ritual-word">Wysteria</span>
        <span className="waffle-ritual-kicker">tatlı bir mola</span>
      </div>
      <span className="waffle-ritual-line waffle-ritual-line-right" aria-hidden="true" />

      {pieces.map((piece) => {
        const x = (piece.start[0] + (piece.end[0] - piece.start[0]) * progress) * spreadFactor;
        const y = (piece.start[1] + (piece.end[1] - piece.start[1]) * progress) * spreadFactor;
        const rotation = piece.rotate * progress;

        return (
          <span
            key={piece.className}
            className={piece.className}
            aria-hidden="true"
            style={{ transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg) scale(${0.32 + progress * 0.04})` }}
          />
        );
      })}
    </div>
  );
}
