import { useEffect, useRef, useState } from 'react';

const pieces = [
  { className: 'waffle-piece waffle-piece-sprinkle', start: [-128, -18], end: [-330, -82], rotate: -12 },
  { className: 'waffle-piece waffle-piece-chocolate', start: [-42, -42], end: [-68, -148], rotate: -4 },
  { className: 'waffle-piece waffle-piece-fruit', start: [128, -18], end: [330, -82], rotate: 12 },
  { className: 'waffle-piece waffle-piece-cookie', start: [-92, 42], end: [-238, 102], rotate: 10 },
  { className: 'waffle-piece waffle-piece-strawberry', start: [92, 42], end: [238, 102], rotate: -10 },
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

  const spreadFactor = clamp(window.innerWidth / 1080, 0.72, 1);
  const pieceScale = clamp(window.innerWidth / 1180, 0.5, 0.82);

  return (
    <div ref={sectionRef} className="waffle-ritual" aria-label="Wysteria waffle seçkisi">
      <svg className="waffle-sketch" viewBox="0 0 240 190" aria-hidden="true">
        <path className="waffle-sketch-shadow" d="M44 77 151 34c12-5 25 1 30 13l25 63c4 12-2 24-14 29l-107 38c-12 4-24-2-29-14L31 106c-4-12 1-24 13-29Z" />
        <path className="waffle-sketch-outline" d="m43 75 108-42c12-5 25 1 30 13l25 63c4 12-2 24-14 29L85 176c-12 4-24-2-29-14l-25-63c-4-12 1-20 12-24Z" />
        <path className="waffle-sketch-grid" d="m58 73 27 84M83 63l28 83M108 53l28 82M133 44l28 81M158 43l24 70M45 101l137-53M53 126l137-53M63 151l136-52" />
        <path className="waffle-sketch-drizzle" d="m59 91c17-19 27 8 42-8s25-5 37-17 24-5 40-18" />
        <circle className="waffle-sketch-dot" cx="73" cy="139" r="4" />
        <circle className="waffle-sketch-dot" cx="166" cy="83" r="4" />
      </svg>
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
            style={{ transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg) scale(${pieceScale * scale})` }}
          />
        );
      })}
    </div>
  );
}
