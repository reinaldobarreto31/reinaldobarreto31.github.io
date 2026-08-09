export function TrackLocomotive() {
  return (
    <div className="photo-mini-train-scene" aria-hidden="true">
      <svg viewBox="0 0 500 500" className="photo-mini-train-track" role="presentation" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="ballast-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4a2818" stopOpacity="0.78" />
            <stop offset="55%" stopColor="#2a1810" stopOpacity="0.62" />
            <stop offset="100%" stopColor="#0e0806" stopOpacity="0.42" />
          </radialGradient>
          <linearGradient id="steel-rail" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8e8f0" stopOpacity="1" />
            <stop offset="18%" stopColor="#a0a0ab" stopOpacity="1" />
            <stop offset="42%" stopColor="#6a6a75" stopOpacity="1" />
            <stop offset="68%" stopColor="#3a3a43" stopOpacity="1" />
            <stop offset="85%" stopColor="#7a7a85" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1a1a1f" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="steel-rail-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="45%" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="50%" stopColor="rgba(255,90,90,0.55)" />
            <stop offset="55%" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="sleeper-wood" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c85028" stopOpacity="0.98" />
            <stop offset="20%" stopColor="#a03818" stopOpacity="0.98" />
            <stop offset="48%" stopColor="#7a2410" stopOpacity="0.95" />
            <stop offset="78%" stopColor="#5a1808" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#340e04" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="sleeper-wood-highlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="35%" stopColor="rgba(255,140,80,0.35)" />
            <stop offset="52%" stopColor="rgba(255,180,120,0.5)" />
            <stop offset="70%" stopColor="rgba(255,140,80,0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <radialGradient id="night-vignette" cx="50%" cy="50%" r="50%">
            <stop offset="52%" stopColor="transparent" stopOpacity="0" />
            <stop offset="76%" stopColor="rgba(10,4,20,0.55)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.88)" stopOpacity="1" />
          </radialGradient>
          <radialGradient id="night-horizon-glow" cx="50%" cy="52%" r="45%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="58%" stopColor="rgba(255,90,70,0.09)" stopOpacity="1" />
            <stop offset="72%" stopColor="rgba(189,147,249,0.07)" stopOpacity="1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <filter id="rail-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="sleeper-shadow" x="-20%" y="-50%" width="140%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.2" floodColor="#000000" floodOpacity="0.55" />
          </filter>
          <filter id="city-lights-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.1" />
          </filter>
        </defs>

        <rect x="0" y="0" width="500" height="500" fill="url(#night-vignette)" />
        <rect x="0" y="0" width="500" height="500" fill="url(#night-horizon-glow)" />

        <g filter="url(#city-lights-blur)" opacity="0.72">
          {Array.from({ length: 32 }).map((_, i) => {
            const seed = i * 97.31;
            const angle = (seed % (Math.PI * 2));
            const radius = 140 + ((seed * 7.1) % 90);
            const cx = 250 + Math.cos(angle) * radius;
            const cy = 250 + Math.sin(angle) * radius * 0.82;
            const colors = ["#ffdd77", "#ff7777", "#aaffbb", "#bd93f9", "#ffffff"];
            const color = colors[i % colors.length];
            const size = 0.8 + ((i * 1.7) % 2.2);
            return <circle key={`city-${i}`} cx={cx} cy={cy} r={size} fill={color} opacity={0.55 + ((i * 0.23) % 0.45)} />;
          })}
        </g>

        <ellipse cx="250" cy="250" rx="200" ry="175" fill="url(#ballast-gradient)" />
        <g filter="url(#sleeper-shadow)" stroke="url(#sleeper-wood)" strokeWidth="5.2" strokeLinecap="round">
          {Array.from({ length: 56 }).map((_, i) => {
            const angle = (i / 56) * Math.PI * 2;
            const rxOut = 214, ryOut = 189;
            const rxIn = 186, ryIn = 161;
            const x1 = 250 + Math.cos(angle) * rxOut;
            const y1 = 250 + Math.sin(angle) * ryOut;
            const x2 = 250 + Math.cos(angle) * rxIn;
            const y2 = 250 + Math.sin(angle) * ryIn;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.92" />;
          })}
        </g>
        <g stroke="url(#sleeper-wood-highlight)" strokeWidth="2" strokeLinecap="round" opacity="0.55">
          {Array.from({ length: 56 }).map((_, i) => {
            const angle = (i / 56) * Math.PI * 2;
            const rxOut = 212, ryOut = 187;
            const rxIn = 188, ryIn = 163;
            const x1 = 250 + Math.cos(angle) * rxOut;
            const y1 = 250 + Math.sin(angle) * ryOut;
            const x2 = 250 + Math.cos(angle) * rxIn;
            const y2 = 250 + Math.sin(angle) * ryIn;
            return <line key={`hl-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>
        <g stroke="#000" strokeWidth="0.6" strokeLinecap="round" opacity="0.4">
          {Array.from({ length: 56 }).map((_, i) => {
            const angle = (i / 56) * Math.PI * 2;
            const rxOut = 213, ryOut = 188;
            const rxInMid = 202, ryInMid = 177;
            const x1 = 250 + Math.cos(angle) * rxOut;
            const y1 = 250 + Math.sin(angle) * ryOut;
            const x2 = 250 + Math.cos(angle) * rxInMid;
            const y2 = 250 + Math.sin(angle) * ryInMid;
            const knots = [0.35, 0.65];
            return knots.map((k, ki) => {
              const kx = x1 + (x2 - x1) * k + ((i + ki) % 3 - 1) * 1.2;
              const ky = y1 + (y2 - y1) * k + ((i * 2 + ki) % 3 - 1) * 1.2;
              return <circle key={`knot-${i}-${ki}`} cx={kx} cy={ky} r={0.8 + ((i + ki) % 3) * 0.25} fill="#2a0a04" opacity="0.7" />;
            });
          })}
        </g>

        <ellipse cx="250" cy="250" rx="208" ry="183" fill="none" stroke="url(#steel-rail)" strokeWidth="5.2" filter="url(#rail-glow)" opacity="0.95" />
        <ellipse cx="250" cy="250" rx="192" ry="167" fill="none" stroke="url(#steel-rail)" strokeWidth="5.2" filter="url(#rail-glow)" opacity="0.95" />
        <ellipse cx="250" cy="250" rx="208" ry="183" fill="none" stroke="url(#steel-rail-glow)" strokeWidth="1.6" opacity="0.78" />
        <ellipse cx="250" cy="250" rx="192" ry="167" fill="none" stroke="url(#steel-rail-glow)" strokeWidth="1.6" opacity="0.78" />

        <ellipse cx="250" cy="250" rx="208" ry="183" fill="none" stroke="#ffffff" strokeWidth="0.6" opacity="0.28" strokeDasharray="1.2 6.5" />
        <ellipse cx="250" cy="250" rx="192" ry="167" fill="none" stroke="#ffffff" strokeWidth="0.6" opacity="0.28" strokeDasharray="1.2 6.5" />
        <ellipse cx="250" cy="250" rx="208" ry="183" fill="none" stroke="rgba(255,90,90,0.4)" strokeWidth="0.4" opacity="0.55" strokeDasharray="2 3" />
        <ellipse cx="250" cy="250" rx="192" ry="167" fill="none" stroke="rgba(255,90,90,0.4)" strokeWidth="0.4" opacity="0.55" strokeDasharray="2 3" />
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
