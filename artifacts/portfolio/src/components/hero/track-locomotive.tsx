export function TrackLocomotive() {
  return (
    <div className="photo-mini-train-scene" aria-hidden="true">
      <svg viewBox="0 0 500 500" className="photo-mini-train-track" role="presentation" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="ballast-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3a2e25" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#1a1410" stopOpacity="0.4" />
          </radialGradient>
          <linearGradient id="steel-rail" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffb86c" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#e87070" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#8b3030" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="sleeper-wood" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7a5a3e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4a3826" stopOpacity="0.85" />
          </linearGradient>
          <filter id="rail-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse cx="250" cy="250" rx="200" ry="175" fill="url(#ballast-gradient)" />
        <ellipse cx="250" cy="250" rx="208" ry="183" fill="none" stroke="url(#steel-rail)" strokeWidth="4.5" filter="url(#rail-glow)" opacity="0.85" />
        <ellipse cx="250" cy="250" rx="192" ry="167" fill="none" stroke="url(#steel-rail)" strokeWidth="4.5" filter="url(#rail-glow)" opacity="0.85" />
        <g stroke="url(#sleeper-wood)" strokeWidth="4" strokeLinecap="round">
          {Array.from({ length: 56 }).map((_, i) => {
            const angle = (i / 56) * Math.PI * 2;
            const rxOut = 212, ryOut = 187;
            const rxIn = 188, ryIn = 163;
            const x1 = 250 + Math.cos(angle) * rxOut;
            const y1 = 250 + Math.sin(angle) * ryOut;
            const x2 = 250 + Math.cos(angle) * rxIn;
            const y2 = 250 + Math.sin(angle) * ryIn;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.75" />;
          })}
        </g>
        <ellipse cx="250" cy="250" rx="208" ry="183" fill="none" stroke="#fff5b8" strokeWidth="0.8" opacity="0.35" strokeDasharray="1 7" />
        <ellipse cx="250" cy="250" rx="192" ry="167" fill="none" stroke="#fff5b8" strokeWidth="0.8" opacity="0.35" strokeDasharray="1 7" />
      </svg>

      <div className="photo-mini-train-loco">
        <svg viewBox="0 0 90 58" className="photo-mini-train-svg" role="presentation">
          <defs>
            <linearGradient id="mini-loco-body" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff8080" />
              <stop offset="45%" stopColor="#e33446" />
              <stop offset="100%" stopColor="#7a0010" />
            </linearGradient>
            <linearGradient id="mini-loco-cabin" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2d2218" />
              <stop offset="100%" stopColor="#1a1310" />
            </linearGradient>
            <linearGradient id="mini-gold-trim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffdd88" />
              <stop offset="50%" stopColor="#ffb86c" />
              <stop offset="100%" stopColor="#c77a30" />
            </linearGradient>
            <radialGradient id="mini-headlight-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="45%" stopColor="#fff3a0" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#ff8800" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="mini-headlight-beam" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#fff5b8" stopOpacity="0.92" />
              <stop offset="40%" stopColor="#ffd166" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#ffd166" stopOpacity="0" />
            </linearGradient>
            <filter id="mini-smoke-blur" x="-100%" y="-200%" width="300%" height="400%">
              <feGaussianBlur stdDeviation="1.3" result="blur1" />
              <feGaussianBlur stdDeviation="2.6" in="blur1" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="mini-wheel-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.7" />
            </filter>
          </defs>

          <polygon points="76,32 92,20 92,44" fill="url(#mini-headlight-beam)" className="mini-headlight-beam" />
          <circle cx="76" cy="32" r="4" fill="url(#mini-headlight-core)" className="mini-headlight-core" />

          <rect x="14" y="40" width="58" height="3.2" rx="1.2" fill="#1a1310" opacity="0.9" />
          <rect x="22" y="42" width="42" height="2" rx="0.8" fill="url(#mini-gold-trim)" opacity="0.85" />

          <rect x="44" y="14" width="24" height="28" rx="2.8" fill="url(#mini-loco-cabin)" stroke="url(#mini-gold-trim)" strokeWidth="1.1" />
          <rect x="47" y="17" width="8.5" height="8.5" rx="1.3" fill="#8be9fd" opacity="0.82" />
          <rect x="58" y="17" width="8.5" height="8.5" rx="1.3" fill="#8be9fd" opacity="0.82" />
          <rect x="47" y="28.5" width="8.5" height="8.5" rx="1.3" fill="#8be9fd" opacity="0.65" />
          <rect x="58" y="28.5" width="8.5" height="8.5" rx="1.3" fill="#8be9fd" opacity="0.65" />
          <rect x="44" y="38" width="24" height="1.5" fill="url(#mini-gold-trim)" opacity="0.7" />

          <rect x="8" y="24" width="40" height="20" rx="3.8" fill="url(#mini-loco-body)" stroke="url(#mini-gold-trim)" strokeWidth="1.2" />
          <rect x="11" y="26" width="34" height="1.3" fill="url(#mini-gold-trim)" opacity="0.85" />
          <rect x="11" y="41" width="34" height="1.3" fill="url(#mini-gold-trim)" opacity="0.85" />

          <rect x="26" y="3" width="11" height="22" rx="2.4" fill="url(#mini-loco-body)" stroke="url(#mini-gold-trim)" strokeWidth="1.1" />
          <rect x="27.5" y="4.5" width="8" height="2.2" rx="0.8" fill="url(#mini-gold-trim)" opacity="0.95" />
          <path d="M28 12 Q31.5 8 35 12" fill="none" stroke="url(#mini-gold-trim)" strokeWidth="0.9" opacity="0.8" />
          <path d="M28 17 Q31.5 13 35 17" fill="none" stroke="url(#mini-gold-trim)" strokeWidth="0.9" opacity="0.7" />
          <rect x="27" y="22" width="9" height="3" rx="1" fill="#2a1a0e" />

          <g filter="url(#mini-smoke-blur)" className="mini-smoke-stack">
            <path d="M31.5 2 Q28 -8 23 -14 Q19 -18 21 -25" fill="none" stroke="#e6e0d8" strokeWidth="3.6" strokeLinecap="round" className="mini-smoke-1" />
            <path d="M33.5 0 Q39 -10 34 -20 Q30 -25 35 -32" fill="none" stroke="#d4cfc7" strokeWidth="3" strokeLinecap="round" className="mini-smoke-2" />
            <path d="M29.5 3 Q24 -5 28 -13 Q32 -17 27 -23" fill="none" stroke="#bfbab2" strokeWidth="2.4" strokeLinecap="round" className="mini-smoke-3" />
          </g>

          <rect x="66" y="24" width="11" height="20" rx="2.4" fill="#221711" stroke="url(#mini-gold-trim)" strokeWidth="1" />
          <rect x="67.5" y="25.5" width="8" height="1.1" fill="url(#mini-gold-trim)" opacity="0.8" />
          <circle cx="76" cy="32" r="3" fill="none" stroke="url(#mini-gold-trim)" strokeWidth="1" />
          <rect x="68" y="28" width="2" height="12" rx="0.5" fill="#3a2a1a" />
          <rect x="72" y="28" width="2" height="12" rx="0.5" fill="#3a2a1a" />

          <g filter="url(#mini-wheel-shadow)">
            <circle cx="19" cy="48" r="6.6" fill="#0f0b08" stroke="url(#mini-gold-trim)" strokeWidth="1.2" />
            <circle cx="19" cy="48" r="2.6" fill="#44475a" />
            <circle cx="19" cy="48" r="1" fill="#f8f8f2" opacity="0.8" />
            <line x1="19" y1="41.4" x2="19" y2="54.6" stroke="#6272a4" strokeWidth="0.6" opacity="0.75" />
            <line x1="12.4" y1="48" x2="25.6" y2="48" stroke="#6272a4" strokeWidth="0.6" opacity="0.75" />

            <circle cx="34" cy="48" r="6.6" fill="#0f0b08" stroke="url(#mini-gold-trim)" strokeWidth="1.2" />
            <circle cx="34" cy="48" r="2.6" fill="#44475a" />
            <circle cx="34" cy="48" r="1" fill="#f8f8f2" opacity="0.8" />
            <line x1="34" y1="41.4" x2="34" y2="54.6" stroke="#6272a4" strokeWidth="0.6" opacity="0.75" />
            <line x1="27.4" y1="48" x2="40.6" y2="48" stroke="#6272a4" strokeWidth="0.6" opacity="0.75" />

            <circle cx="51" cy="48" r="5.8" fill="#0f0b08" stroke="url(#mini-gold-trim)" strokeWidth="1.1" />
            <circle cx="51" cy="48" r="2.3" fill="#44475a" />
            <circle cx="51" cy="48" r="0.9" fill="#f8f8f2" opacity="0.8" />

            <circle cx="67" cy="48" r="5.4" fill="#0f0b08" stroke="url(#mini-gold-trim)" strokeWidth="1" />
            <circle cx="67" cy="48" r="2.1" fill="#44475a" />
            <circle cx="67" cy="48" r="0.8" fill="#f8f8f2" opacity="0.75" />
          </g>

          <rect x="9" y="20" width="5" height="7" rx="0.8" fill="#2a1a0e" opacity="0.9" />
          <rect x="10.5" y="21.5" width="2" height="4" rx="0.4" fill="#bd93f9" opacity="0.55" className="mini-glow-window" />
        </svg>

        <div className="mini-train-light-trail" />
      </div>
    </div>
  );
}
