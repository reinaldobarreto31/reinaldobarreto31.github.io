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
        <svg viewBox="0 0 220 140" className="photo-mini-train-svg" role="presentation">
          <defs>
            <linearGradient id="classic-body" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3a3a3f" />
              <stop offset="28%" stopColor="#1a1a1e" />
              <stop offset="62%" stopColor="#0c0c10" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
            <linearGradient id="classic-body-highlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="35%" stopColor="rgba(255,255,255,0.08)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="70%" stopColor="rgba(255,255,255,0.08)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="classic-red" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c82420" />
              <stop offset="45%" stopColor="#8f1614" />
              <stop offset="100%" stopColor="#4a0a08" />
            </linearGradient>
            <linearGradient id="classic-red-highlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,180,170,0.2)" />
              <stop offset="50%" stopColor="rgba(255,120,110,0.4)" />
              <stop offset="100%" stopColor="rgba(255,180,170,0.15)" />
            </linearGradient>
            <linearGradient id="classic-brass" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5a3a10" />
              <stop offset="30%" stopColor="#c78a2e" />
              <stop offset="50%" stopColor="#ffd36a" />
              <stop offset="72%" stopColor="#b07420" />
              <stop offset="100%" stopColor="#4a2e08" />
            </linearGradient>
            <radialGradient id="classic-headlight" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="28%" stopColor="#fff6c8" stopOpacity="0.98" />
              <stop offset="62%" stopColor="#ffc458" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#ff8040" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="classic-headlight-beam" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#fffbe0" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#ffd880" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#ffc060" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="smoke-cloud-1" cx="45%" cy="55%" r="55%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.88" />
              <stop offset="42%" stopColor="#e8e4dd" stopOpacity="0.52" />
              <stop offset="100%" stopColor="#8a8478" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="smoke-cloud-2" cx="55%" cy="48%" r="50%">
              <stop offset="0%" stopColor="#f8f4ee" stopOpacity="0.78" />
              <stop offset="45%" stopColor="#d8d2c6" stopOpacity="0.44" />
              <stop offset="100%" stopColor="#7a7468" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="smoke-cloud-3" cx="50%" cy="52%" r="48%">
              <stop offset="0%" stopColor="#f0ece4" stopOpacity="0.68" />
              <stop offset="48%" stopColor="#c8c2b4" stopOpacity="0.36" />
              <stop offset="100%" stopColor="#6a6458" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="cabin-roof" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4a2418" />
              <stop offset="50%" stopColor="#2a1208" />
              <stop offset="100%" stopColor="#120604" />
            </linearGradient>
            <linearGradient id="cabin-window" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#eef8ff" />
              <stop offset="50%" stopColor="#8fd0f8" />
              <stop offset="100%" stopColor="#4a88c0" />
            </linearGradient>
            <radialGradient id="smokestack-top" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#4a4640" />
              <stop offset="60%" stopColor="#2a2620" />
              <stop offset="100%" stopColor="#121010" />
            </radialGradient>
            <filter id="smoke-blur-big" x="-150%" y="-250%" width="400%" height="500%">
              <feGaussianBlur stdDeviation="3.2" result="b1" />
              <feGaussianBlur stdDeviation="5.8" in="b1" result="b2" />
              <feMerge>
                <feMergeNode in="b2" />
                <feMergeNode in="b1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="smoke-blur-mid" x="-100%" y="-180%" width="300%" height="380%">
              <feGaussianBlur stdDeviation="2.4" result="b1" />
              <feGaussianBlur stdDeviation="4.4" in="b1" result="b2" />
              <feMerge>
                <feMergeNode in="b2" />
                <feMergeNode in="b1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="classic-train-shadow" x="-40%" y="-10%" width="180%" height="140%">
              <feDropShadow dx="0" dy="5" stdDeviation="4.2" floodColor="#000" floodOpacity="0.55" />
            </filter>
            <filter id="wheel-shadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="1" stdDeviation="0.8" floodColor="#000" floodOpacity="0.7" />
            </filter>
          </defs>

          <g filter="url(#smoke-blur-big)" className="classic-smoke-layer">
            <circle cx="82" cy="22" r="14" fill="url(#smoke-cloud-1)" className="classic-smoke-a-1" />
            <circle cx="96" cy="10" r="16" fill="url(#smoke-cloud-2)" className="classic-smoke-a-2" />
            <circle cx="114" cy="-2" r="13" fill="url(#smoke-cloud-3)" className="classic-smoke-a-3" />
            <circle cx="70" cy="30" r="11" fill="url(#smoke-cloud-2)" className="classic-smoke-a-4" opacity="0.85" />
          </g>
          <g filter="url(#smoke-blur-mid)" className="classic-smoke-layer">
            <circle cx="108" cy="8" r="10" fill="url(#smoke-cloud-1)" className="classic-smoke-b-1" opacity="0.92" />
            <circle cx="122" cy="-8" r="11" fill="url(#smoke-cloud-2)" className="classic-smoke-b-2" opacity="0.88" />
            <circle cx="136" cy="-18" r="9" fill="url(#smoke-cloud-3)" className="classic-smoke-b-3" opacity="0.8" />
            <circle cx="88" cy="16" r="9" fill="url(#smoke-cloud-3)" className="classic-smoke-b-4" opacity="0.78" />
            <circle cx="148" cy="-6" r="7.5" fill="url(#smoke-cloud-1)" className="classic-smoke-b-5" opacity="0.66" />
          </g>
          <g filter="url(#smoke-blur-big)" className="classic-smoke-layer">
            <circle cx="130" cy="-22" r="15" fill="url(#smoke-cloud-1)" className="classic-smoke-c-1" opacity="0.72" />
            <circle cx="152" cy="-30" r="12" fill="url(#smoke-cloud-2)" className="classic-smoke-c-2" opacity="0.58" />
            <circle cx="168" cy="-20" r="10" fill="url(#smoke-cloud-3)" className="classic-smoke-c-3" opacity="0.5" />
            <circle cx="116" cy="-12" r="11" fill="url(#smoke-cloud-2)" className="classic-smoke-c-4" opacity="0.62" />
          </g>

          <g filter="url(#classic-train-shadow)">
            <polygon points="16,120 6,100 58,100 56,120" fill="url(#classic-red)" stroke="url(#classic-brass)" strokeWidth="0.9" />
            <polygon points="20,116 12,102 54,102 52,116" fill="url(#classic-red-highlight)" opacity="0.6" />
            <g stroke="url(#classic-brass)" strokeWidth="1.1" strokeLinecap="round">
              <line x1="18" y1="118" x2="14" y2="102" />
              <line x1="24" y1="118" x2="20" y2="102" />
              <line x1="30" y1="118" x2="26" y2="102" />
              <line x1="36" y1="118" x2="32" y2="102" />
              <line x1="42" y1="118" x2="38" y2="102" />
              <line x1="48" y1="118" x2="44" y2="102" />
              <line x1="54" y1="118" x2="50" y2="102" />
            </g>
            <rect x="10" y="96" width="52" height="4" rx="1" fill="url(#classic-brass)" />

            <polygon points="0,108 18,108 18,116 6,124" fill="url(#classic-body)" stroke="url(#classic-brass)" strokeWidth="0.8" />

            <polygon points="8,100 20,82 60,82 60,100" fill="url(#classic-headlight-beam)" opacity="0.75" className="mini-headlight-beam" />
            <circle cx="34" cy="92" r="13" fill="url(#classic-headlight)" className="mini-headlight-core" />
            <circle cx="34" cy="92" r="9.5" fill="none" stroke="url(#classic-brass)" strokeWidth="1.8" />
            <circle cx="34" cy="92" r="5" fill="#fffbe0" opacity="0.95" />
            <circle cx="32" cy="90" r="1.6" fill="#ffffff" opacity="0.9" />

            <ellipse cx="68" cy="96" rx="6.5" ry="7.5" fill="url(#classic-body)" stroke="url(#classic-brass)" strokeWidth="0.9" opacity="0.9" />

            <rect x="62" y="70" width="108" height="32" rx="11" fill="url(#classic-body)" stroke="url(#classic-brass)" strokeWidth="1.2" />
            <rect x="64" y="72" width="104" height="5" rx="2" fill="url(#classic-body-highlight)" opacity="0.9" />
            <rect x="62" y="100" width="108" height="2.5" rx="1" fill="url(#classic-brass)" opacity="0.85" />

            <circle cx="92" cy="66" r="5.5" fill="url(#classic-body)" stroke="url(#classic-brass)" strokeWidth="1" />
            <circle cx="92" cy="64" r="2.8" fill="url(#classic-brass)" opacity="0.8" />
            <rect x="90" y="70" width="4" height="2.5" fill="url(#classic-brass)" opacity="0.75" />

            <circle cx="118" cy="64" r="6.8" fill="url(#classic-body)" stroke="url(#classic-brass)" strokeWidth="1" />
            <circle cx="118" cy="62" r="3.4" fill="#e8e2d4" opacity="0.9" />
            <rect x="116" y="69" width="4" height="2.5" fill="url(#classic-brass)" opacity="0.75" />

            <g stroke="url(#classic-brass)" strokeWidth="1.5" fill="none">
              <ellipse cx="116" cy="86" rx="26" ry="4" opacity="0.7" />
              <ellipse cx="116" cy="90" rx="22" ry="3" opacity="0.6" />
            </g>

            <g>
              <rect x="88" y="40" width="20" height="24" rx="4" fill="url(#classic-body)" stroke="url(#classic-brass)" strokeWidth="1.1" />
              <rect x="90" y="42" width="16" height="18" rx="3" fill="url(#classic-body-highlight)" opacity="0.5" />
              <path d="M 86 42 Q 98 30 110 42" fill="url(#smokestack-top)" stroke="url(#classic-brass)" strokeWidth="1.2" />
              <ellipse cx="98" cy="40" rx="12" ry="3.2" fill="url(#smokestack-top)" stroke="url(#classic-brass)" strokeWidth="1" />
              <ellipse cx="98" cy="40" rx="8" ry="2" fill="#1a1612" opacity="0.9" />
              <rect x="91" y="56" width="14" height="3" rx="1" fill="url(#classic-brass)" opacity="0.85" />
            </g>

            <g stroke="url(#classic-brass)" strokeWidth="0.9" fill="none" opacity="0.7">
              <line x1="70" y1="78" x2="166" y2="78" />
              <line x1="70" y1="90" x2="166" y2="90" />
            </g>

            <g>
              <rect x="164" y="58" width="46" height="44" rx="4" fill="url(#classic-red)" stroke="url(#classic-brass)" strokeWidth="1.3" />
              <rect x="166" y="58" width="42" height="5" rx="2" fill="url(#classic-red-highlight)" opacity="0.65" />
              <polygon points="160,58 164,50 210,50 214,58" fill="url(#cabin-roof)" stroke="url(#classic-brass)" strokeWidth="1.1" />
              <polygon points="186,46 186,50 188,50 188,46" fill="#1a0c06" opacity="0" />
              <polygon points="184,50 186,40 190,40 192,50" fill="url(#classic-brass)" stroke="#3a2208" strokeWidth="0.5" />
              <circle cx="188" cy="38" r="1.6" fill="#ffdd66" stroke="url(#classic-brass)" strokeWidth="0.6" />

              <rect x="176" y="70" width="14" height="20" rx="2" fill="url(#cabin-window)" stroke="url(#classic-brass)" strokeWidth="1" />
              <g stroke="#1a1208" strokeWidth="0.7" opacity="0.8">
                <line x1="183" y1="70" x2="183" y2="90" />
                <line x1="176" y1="80" x2="190" y2="80" />
              </g>
              <rect x="196" y="72" width="10" height="18" rx="1.6" fill="url(#cabin-window)" stroke="url(#classic-brass)" strokeWidth="0.9" opacity="0.92" />
              <g stroke="#1a1208" strokeWidth="0.6" opacity="0.75">
                <line x1="201" y1="72" x2="201" y2="90" />
              </g>

              <rect x="170" y="95" width="34" height="3.5" rx="1" fill="url(#classic-brass)" opacity="0.85" />
              <rect x="170" y="62" width="34" height="1.8" rx="0.6" fill="url(#classic-brass)" opacity="0.7" />
            </g>

            <rect x="58" y="102" width="150" height="4" rx="1.4" fill="url(#classic-body)" stroke="url(#classic-brass)" strokeWidth="0.9" />

            <g filter="url(#wheel-shadow)">
              <g>
                <circle cx="84" cy="118" r="13.5" fill="#0a0a0c" stroke="url(#classic-brass)" strokeWidth="1.4" />
                <circle cx="84" cy="118" r="9.2" fill="none" stroke="#4a4a52" strokeWidth="0.9" opacity="0.8" />
                <circle cx="84" cy="118" r="4.6" fill="#2a2a30" stroke="url(#classic-brass)" strokeWidth="0.8" />
                <circle cx="84" cy="118" r="1.8" fill="#b8b0a0" opacity="0.9" />
                <g stroke="#6a6a74" strokeWidth="0.85" opacity="0.85">
                  <line x1="84" y1="105.5" x2="84" y2="130.5" />
                  <line x1="71.5" y1="118" x2="96.5" y2="118" />
                  <line x1="75.2" y1="109.2" x2="92.8" y2="126.8" />
                  <line x1="92.8" y1="109.2" x2="75.2" y2="126.8" />
                </g>
              </g>
              <g>
                <circle cx="122" cy="118" r="13.5" fill="#0a0a0c" stroke="url(#classic-brass)" strokeWidth="1.4" />
                <circle cx="122" cy="118" r="9.2" fill="none" stroke="#4a4a52" strokeWidth="0.9" opacity="0.8" />
                <circle cx="122" cy="118" r="4.6" fill="#2a2a30" stroke="url(#classic-brass)" strokeWidth="0.8" />
                <circle cx="122" cy="118" r="1.8" fill="#b8b0a0" opacity="0.9" />
                <g stroke="#6a6a74" strokeWidth="0.85" opacity="0.85">
                  <line x1="122" y1="105.5" x2="122" y2="130.5" />
                  <line x1="109.5" y1="118" x2="134.5" y2="118" />
                  <line x1="113.2" y1="109.2" x2="130.8" y2="126.8" />
                  <line x1="130.8" y1="109.2" x2="113.2" y2="126.8" />
                </g>
              </g>
              <g>
                <circle cx="162" cy="118" r="11" fill="#0a0a0c" stroke="url(#classic-brass)" strokeWidth="1.3" />
                <circle cx="162" cy="118" r="7.4" fill="none" stroke="#4a4a52" strokeWidth="0.85" opacity="0.8" />
                <circle cx="162" cy="118" r="3.8" fill="#2a2a30" stroke="url(#classic-brass)" strokeWidth="0.75" />
                <circle cx="162" cy="118" r="1.5" fill="#b8b0a0" opacity="0.9" />
                <g stroke="#6a6a74" strokeWidth="0.8" opacity="0.85">
                  <line x1="162" y1="108" x2="162" y2="128" />
                  <line x1="152" y1="118" x2="172" y2="118" />
                  <line x1="155" y1="111" x2="169" y2="125" />
                  <line x1="169" y1="111" x2="155" y2="125" />
                </g>
              </g>
              <g>
                <circle cx="194" cy="118" r="9" fill="#0a0a0c" stroke="url(#classic-brass)" strokeWidth="1.2" />
                <circle cx="194" cy="118" r="6" fill="none" stroke="#4a4a52" strokeWidth="0.8" opacity="0.8" />
                <circle cx="194" cy="118" r="3.1" fill="#2a2a30" stroke="url(#classic-brass)" strokeWidth="0.7" />
                <circle cx="194" cy="118" r="1.2" fill="#b8b0a0" opacity="0.9" />
                <g stroke="#6a6a74" strokeWidth="0.75" opacity="0.85">
                  <line x1="194" y1="110" x2="194" y2="126" />
                  <line x1="186" y1="118" x2="202" y2="118" />
                </g>
              </g>
            </g>

            <g stroke="url(#classic-brass)" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.9">
              <line x1="84" y1="118" x2="194" y2="118" />
            </g>
            <g stroke="#3a3630" strokeWidth="1.2" fill="#2a2620" opacity="0.95">
              <rect x="102" y="115.5" width="7" height="5" rx="1" />
              <rect x="142" y="115.5" width="7" height="5" rx="1" />
              <rect x="178" y="115.5" width="6" height="5" rx="1" />
            </g>
          </g>
        </svg>

        <div className="mini-train-light-trail" />
      </div>
    </div>
  );
}
