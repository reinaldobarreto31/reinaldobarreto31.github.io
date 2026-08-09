export function TrackLocomotive() {
  return (
    <>
      <div className="track-train track-train-main" aria-hidden="true">
        <div className="track-locomotive">
          <svg viewBox="0 0 56 36" className="track-locomotive-svg" role="presentation">
            <defs>
              <linearGradient id="loco-body" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6e6e" />
                <stop offset="55%" stopColor="#e33446" />
                <stop offset="100%" stopColor="#8b0000" />
              </linearGradient>
              <linearGradient id="headlight-beam" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#fff5b8" stopOpacity="0.95" />
                <stop offset="40%" stopColor="#ffd166" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ffd166" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="headlight-core" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="45%" stopColor="#fff3a0" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ff8800" stopOpacity="0" />
              </radialGradient>
              <filter id="glow-spark" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="0.8" result="b1" />
                <feMerge><feMergeNode in="b1" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <polygon points="44,18 56,10 56,26" fill="url(#headlight-beam)" className="track-headlight-beam" />
            <circle cx="44" cy="18" r="3.2" fill="url(#headlight-core)" className="track-headlight-core" />
            <rect x="6" y="10" width="32" height="16" rx="3.5" fill="url(#loco-body)" stroke="#ffb86c" strokeWidth="1.1" />
            <rect x="38" y="12" width="8" height="14" rx="2" fill="#282a36" stroke="#bd93f9" strokeWidth="0.9" />
            <rect x="10" y="5" width="8" height="7" rx="1.2" fill="#f8f8f2" opacity="0.92" />
            <rect x="22" y="7" width="5" height="5" rx="0.8" fill="#44475a" stroke="#6272a4" strokeWidth="0.5" />
            <rect x="14" y="21" width="18" height="2.5" rx="1" fill="#1a1b26" opacity="0.85" />
            <circle cx="13" cy="29" r="4.4" fill="#1a1b26" stroke="#6272a4" strokeWidth="1.3" />
            <circle cx="13" cy="29" r="1.8" fill="#44475a" />
            <circle cx="25" cy="29" r="4.4" fill="#1a1b26" stroke="#6272a4" strokeWidth="1.3" />
            <circle cx="25" cy="29" r="1.8" fill="#44475a" />
            <circle cx="35" cy="29" r="3.4" fill="#1a1b26" stroke="#6272a4" strokeWidth="1.1" />
            <path d="M14 11 Q18 17 22 11" fill="none" stroke="#ffb86c" strokeWidth="0.7" opacity="0.7" />
            <g className="track-smoke-stack">
              <path d="M25 5 Q22 -2 20 -7" fill="none" stroke="#bd93f9" strokeWidth="1.4" strokeLinecap="round" className="track-smoke track-smoke-1" />
              <path d="M26 3 Q28 -6 24 -12" fill="none" stroke="#ff79c6" strokeWidth="1.1" strokeLinecap="round" className="track-smoke track-smoke-2" />
              <path d="M24 4 Q20 -3 16 -4" fill="none" stroke="#6272a4" strokeWidth="0.9" strokeLinecap="round" className="track-smoke track-smoke-3" opacity="0.75" />
            </g>
            <g filter="url(#glow-spark)" className="track-sparks-group">
              <circle cx="48" cy="22" r="0.8" fill="#ffb86c" className="track-spark track-spark-1" />
              <circle cx="50" cy="16" r="0.6" fill="#ff6e6e" className="track-spark track-spark-2" />
              <circle cx="52" cy="20" r="0.5" fill="#fff5b8" className="track-spark track-spark-3" />
              <circle cx="46" cy="14" r="0.55" fill="#ffd166" className="track-spark track-spark-4" />
            </g>
          </svg>
        </div>
        <div className="track-trail-cars">
          <div className="track-car-box track-car-passenger">
            <svg viewBox="0 0 42 28" className="track-car-svg"><rect x="3" y="7" width="36" height="14" rx="2.5" fill="#44475a" stroke="#bd93f9" strokeWidth="0.9" /><rect x="7" y="10" width="4" height="5" rx="0.8" fill="#8be9fd" opacity="0.75" /><rect x="15" y="10" width="4" height="5" rx="0.8" fill="#8be9fd" opacity="0.75" /><rect x="23" y="10" width="4" height="5" rx="0.8" fill="#8be9fd" opacity="0.75" /><rect x="31" y="10" width="4" height="5" rx="0.8" fill="#8be9fd" opacity="0.75" /><circle cx="11" cy="25" r="2.2" fill="#1a1b26" stroke="#6272a4" strokeWidth="0.7" /><circle cx="31" cy="25" r="2.2" fill="#1a1b26" stroke="#6272a4" strokeWidth="0.7" /></svg>
          </div>
          <div className="track-car-box track-car-cargo">
            <svg viewBox="0 0 42 28" className="track-car-svg"><rect x="3" y="9" width="36" height="12" rx="2" fill="#282a36" stroke="#50fa7b" strokeWidth="0.85" /><rect x="6" y="11" width="8" height="8" fill="#e33446" opacity="0.85" /><rect x="17" y="11" width="8" height="8" fill="#bd93f9" opacity="0.85" /><rect x="28" y="11" width="8" height="8" fill="#ffb86c" opacity="0.85" /><circle cx="11" cy="25" r="2.2" fill="#1a1b26" stroke="#6272a4" strokeWidth="0.7" /><circle cx="31" cy="25" r="2.2" fill="#1a1b26" stroke="#6272a4" strokeWidth="0.7" /></svg>
          </div>
          <div className="track-car-box track-car-caboose">
            <svg viewBox="0 0 36 28" className="track-car-svg"><rect x="3" y="8" width="30" height="13" rx="2.5" fill="#6272a4" stroke="#ff5555" strokeWidth="0.9" /><rect x="11" y="3" width="14" height="7" rx="1.2" fill="#44475a" stroke="#bd93f9" strokeWidth="0.6" /><rect x="14" y="5" width="3" height="4" rx="0.5" fill="#ffd166" opacity="0.85" /><rect x="19" y="5" width="3" height="4" rx="0.5" fill="#ffd166" opacity="0.85" /><circle cx="10" cy="25" r="2.2" fill="#1a1b26" stroke="#6272a4" strokeWidth="0.7" /><circle cx="26" cy="25" r="2.2" fill="#1a1b26" stroke="#6272a4" strokeWidth="0.7" /></svg>
          </div>
        </div>
        <div className="track-light-trail" aria-hidden="true" />
      </div>
      <div className="track-ghost trio-ghost-a" aria-hidden="true">
        <div className="ghost-orb orb-primary" />
      </div>
      <div className="track-ghost trio-ghost-b" aria-hidden="true">
        <div className="ghost-orb orb-secondary" />
      </div>
      <div className="track-ghost trio-ghost-c" aria-hidden="true">
        <div className="ghost-orb orb-accent" />
      </div>
    </>
  );
}
