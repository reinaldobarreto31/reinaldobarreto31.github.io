/** Locomotiva animada seguindo o trilho do backdrop (perspectiva do hero). */
export function TrackLocomotive() {
  return (
    <div className="track-train" aria-hidden="true">
      <div className="track-locomotive">
        <svg viewBox="0 0 48 32" className="track-locomotive-svg" role="presentation">
          <defs>
            <linearGradient id="loco-body" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6e6e" />
              <stop offset="100%" stopColor="#cc0000" />
            </linearGradient>
          </defs>
          <rect x="4" y="10" width="28" height="14" rx="3" fill="url(#loco-body)" stroke="#ffb86c" strokeWidth="1" />
          <rect x="32" y="12" width="10" height="12" rx="2" fill="#44475a" stroke="#bd93f9" strokeWidth="0.8" />
          <circle cx="12" cy="26" r="4" fill="#282a36" stroke="#6272a4" strokeWidth="1.2" />
          <circle cx="24" cy="26" r="4" fill="#282a36" stroke="#6272a4" strokeWidth="1.2" />
          <rect x="8" y="6" width="6" height="6" rx="1" fill="#f8f8f2" opacity="0.85" />
          <path d="M38 8 Q42 4 44 8" fill="none" stroke="#6272a4" strokeWidth="1.5" strokeLinecap="round" className="track-smoke" />
          <path d="M40 5 Q44 1 46 5" fill="none" stroke="#bd93f9" strokeWidth="1" strokeLinecap="round" className="track-smoke track-smoke-delay" />
        </svg>
      </div>
      <div className="track-locomotive track-locomotive-trail">
        <span className="track-car track-car-1" />
        <span className="track-car track-car-2" />
      </div>
    </div>
  );
}
