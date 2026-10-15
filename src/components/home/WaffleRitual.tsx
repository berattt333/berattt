import { useEffect, useRef, useState } from 'react';

const pieces = [
  { className: 'waffle-piece waffle-piece-sprinkle', start: [-225, -145], end: [-405, -260], rotate: -18 },
  { className: 'waffle-piece waffle-piece-chocolate', start: [0, -185], end: [0, -315], rotate: 8 },
  { className: 'waffle-piece waffle-piece-fruit', start: [225, -140], end: [405, -250], rotate: 18 },
  { className: 'waffle-piece waffle-piece-cookie', start: [-215, 145], end: [-375, 265], rotate: 16 },
  { className: 'waffle-piece waffle-piece-strawberry', start: [215, 145], end: [380, 270], rotate: -16 },
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
        const travel = Math.max(window.innerHeight * 0.8, rect.height * 0.55);
        const nextProgress = clamp((window.innerHeight * 0.7 - rect.top) / travel, 0, 1);
        setProgress(nextProgress);
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

  const spreadFactor = clamp(window.innerWidth / 780, 0.68, 1);

  return (
    <div ref={sectionRef} className="waffle-ritual" aria-label="Wysteria waffle seçkisi">
      <div className="waffle-ritual-line waffle-ritual-line-left" aria-hidden="true" />
      <div className="waffle-ritual-center">
        <span className="waffle-ritual-kicker">Birlikte güzel</span>
        <span className="waffle-ritual-word">Wysteria</span>
        <span className="waffle-ritual-kicker">tatlı bir mola</span>
      </div>
      <div className="waffle-ritual-line waffle-ritual-line-right" aria-hidden="true" />

      {pieces.map((piece) => {
        const x = (piece.start[0] + (piece.end[0] - piece.start[0]) * progress) * spreadFactor;
        const y = (piece.start[1] + (piece.end[1] - piece.start[1]) * progress) * spreadFactor;
        const rotation = piece.rotate * progress;
        const scale = 0.82 + progress * 0.18;

        return (
          <span
            key={piece.className}
            className={piece.className}
            aria-hidden="true"
            style={{ transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg) scale(${scale})` }}
          />
        );
      })}
    </div>
  );
}
