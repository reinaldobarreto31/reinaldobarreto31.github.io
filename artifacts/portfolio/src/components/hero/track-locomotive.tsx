export function TrackLocomotive() {
  return (
    <>
      <div className="track-train track-train-main" aria-hidden="true">
        <svg viewBox="0 0 320 130" className="track-locomotive-svg" role="presentation">
          <defs>
            <linearGradient id="loco-red-body" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c72136" />
              <stop offset="45%" stopColor="#9e0b1e" />
              <stop offset="100%" stopColor="#5e0311" />
            </linearGradient>
            <linearGradient id="loco-red-side" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a61227" />
              <stop offset="100%" stopColor="#6b0515" />
            </linearGradient>
            <linearGradient id="tender-red" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#b81628" />
              <stop offset="100%" stopColor="#5c0310" />
            </linearGradient>
            <linearGradient id="wood-red" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7a2020" />
              <stop offset="25%" stopColor="#a62828" />
              <stop offset="50%" stopColor="#8a1e1e" />
              <stop offset="75%" stopColor="#b03030" />
              <stop offset="100%" stopColor="#6d1818" />
            </linearGradient>
            <linearGradient id="rail-steel" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4a4a4a" />
              <stop offset="50%" stopColor="#2a2a2a" />
              <stop offset="100%" stopColor="#151515" />
            </linearGradient>
            <radialGradient id="wheel-hub-red" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffd9d9" />
              <stop offset="30%" stopColor="#e2384e" />
              <stop offset="100%" stopColor="#710614" />
            </radialGradient>
            <filter id="soft-shadow-train" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.8" />
            </filter>
          </defs>

          {/* RAIL TRACK */}
          <g opacity="0.9">
            {/* sleepers */}
            {Array.from({ length: 24 }).map((_, i) => (
              <rect key={`rs1-${i}`} x={-10 + i * 14} y="115" width="11" height="3.4" rx="0.6" fill="#3a2416" stroke="#1a0f08" strokeWidth="0.3" />
            ))}
            {/* rails */}
            <rect x="-10" y="111.8" width="340" height="1.8" fill="url(#rail-steel)" />
            <rect x="-10" y="118.6" width="340" height="1.8" fill="url(#rail-steel)" />
          </g>

          {/* TENDER (RED) - left 8 wheels */}
          <g filter="url(#soft-shadow-train)">
            {/* tender body */}
            <rect x="12" y="58" width="118" height="40" rx="5" fill="url(#tender-red)" stroke="#2c0208" strokeWidth="1.2" />
            <rect x="18" y="66" width="106" height="20" rx="3" fill="#7f0818" opacity="0.45" />
            {/* wood pile on top */}
            <g fill="url(#wood-red)">
              <rect x="20" y="50" width="14" height="9" rx="1.6" />
              <rect x="34" y="47" width="16" height="12" rx="1.8" />
              <rect x="50" y="50" width="15" height="9" rx="1.6" />
              <rect x="64" y="46" width="17" height="13" rx="1.9" />
              <rect x="80" y="49" width="14" height="10" rx="1.5" />
              <rect x="94" y="47" width="16" height="12" rx="1.8" />
              <rect x="110" y="50" width="14" height="9" rx="1.6" />
            </g>
            <g fill="none" stroke="#3a0b11" strokeWidth="0.5" opacity="0.8">
              <rect x="21" y="51" width="12" height="7" rx="1.4" />
              <rect x="35" y="48" width="14" height="10" rx="1.6" />
              <rect x="65" y="47" width="15" height="11" rx="1.7" />
              <rect x="95" y="48" width="14" height="10" rx="1.6" />
            </g>
            {/* gold trim */}
            <rect x="18" y="76" width="106" height="14" rx="2" fill="none" stroke="#d4a24c" strokeWidth="1.2" opacity="0.85" />
            {/* tender wheels 4 axles */}
            <g>
              {[0, 1, 2, 3].map((i) => {
                const cx = 29 + i * 32;
                return (
                  <g key={`tw-${i}`}>
                    <circle cx={cx} cy="108" r="8.4" fill="#0e0e0e" stroke="#4a4a4a" strokeWidth="1.3" />
                    <circle cx={cx} cy="108" r="5.6" fill="#1a1a1a" />
                    <g stroke="#6a6a6a" strokeWidth="0.7">
                      <line x1={cx - 4.8} y1="108" x2={cx + 4.8} y2="108" />
                      <line x1={cx} y1="103.2" x2={cx} y2="112.8" />
                      <line x1={cx - 3.4} y1="104.6" x2={cx + 3.4} y2="111.4" />
                      <line x1={cx + 3.4} y1="104.6" x2={cx - 3.4} y2="111.4" />
                    </g>
                    <circle cx={cx} cy="108" r="1.6" fill="#2d2d2d" />
                  </g>
                );
              })}
            </g>
            {/* coupling hook */}
            <rect x="130" y="82" width="8" height="2" fill="#2a2a2a" />
            <circle cx="140" cy="83" r="2" fill="none" stroke="#3a3a3a" strokeWidth="1.3" />
          </g>

          {/* CAB + BOILER (RED LOCOMOTIVE) */}
          <g filter="url(#soft-shadow-train)">
            {/* cab rear step */}
            <rect x="136" y="88" width="14" height="10" fill="#1c1c1c" stroke="#3a3a3a" strokeWidth="0.9" />
            <g stroke="#4a4a4a" strokeWidth="0.6">
              <line x1="137" y1="91" x2="149" y2="91" />
              <line x1="137" y1="94" x2="149" y2="94" />
            </g>

            {/* cab body */}
            <rect x="138" y="44" width="58" height="54" rx="4" fill="url(#loco-red-body)" stroke="#2a0107" strokeWidth="1.2" />
            {/* cab roof */}
            <rect x="132" y="36" width="74" height="10" rx="2.2" fill="#5c0310" stroke="#2c0208" strokeWidth="1.1" />
            <polygon points="132,46 134,36 206,36 204,46" fill="#7a0514" opacity="0.55" />

            {/* cab window */}
            <g>
              <rect x="160" y="50" width="30" height="22" rx="2" fill="#0a1830" stroke="#d4a24c" strokeWidth="1.3" />
              <line x1="175" y1="50" x2="175" y2="72" stroke="#d4a24c" strokeWidth="0.9" />
              <line x1="160" y1="61" x2="190" y2="61" stroke="#d4a24c" strokeWidth="0.9" />
              <polygon points="160,50 190,50 187,55 163,55" fill="#88c2ff" opacity="0.35" />
              <polygon points="160,61 175,61 175,72 160,72" fill="#4d8cd0" opacity="0.25" />
            </g>

            {/* cab side name plate */}
            <rect x="142" y="68" width="14" height="10" rx="1.4" fill="#7a0514" stroke="#d4a24c" strokeWidth="0.8" />
            <rect x="144" y="70" width="10" height="6" rx="0.8" fill="#3d0209" />

            {/* boiler */}
            <rect x="186" y="54" width="86" height="38" rx="7" fill="url(#loco-red-side)" stroke="#2a0107" strokeWidth="1.3" />
            {/* boiler bands */}
            <g stroke="#d4a24c" strokeWidth="1.3" opacity="0.9">
              <line x1="202" y1="56" x2="202" y2="90" />
              <line x1="224" y1="56" x2="224" y2="90" />
              <line x1="248" y1="56" x2="248" y2="90" />
            </g>
            {/* boiler domes */}
            <g>
              <rect x="204" y="42" width="20" height="14" rx="3" fill="#6a0513" stroke="#d4a24c" strokeWidth="1" />
              <circle cx="214" cy="38" r="3.2" fill="#d4a24c" opacity="0.85" />
              <rect x="208" y="34" width="12" height="6" rx="1.4" fill="#8f1829" stroke="#d4a24c" strokeWidth="0.7" />
            </g>
            {/* sand dome */}
            <g>
              <rect x="244" y="44" width="18" height="12" rx="2.6" fill="#6a0513" stroke="#d4a24c" strokeWidth="1" />
              <circle cx="253" cy="40" r="2.6" fill="#c7892b" opacity="0.85" />
            </g>
            {/* brass pipes */}
            <g fill="none" stroke="#d4a24c" strokeWidth="1.2" opacity="0.95">
              <path d="M206 50 C 210 46, 218 46, 222 50 L 222 76" />
              <path d="M222 76 C 228 78, 240 78, 246 76" />
              <path d="M246 76 L 246 50 C 250 46, 258 46, 262 50" />
            </g>
            <circle cx="222" cy="82" r="3.8" fill="#0a0a0a" stroke="#d4a24c" strokeWidth="1.1" />
            <circle cx="222" cy="82" r="1.6" fill="#2c0107" />

            {/* smokestack diamond */}
            <g>
              <rect x="274" y="10" width="22" height="14" rx="2" fill="#141414" stroke="#3a3a3a" strokeWidth="1" />
              <rect x="270" y="22" width="30" height="22" rx="3" fill="#1f1f1f" stroke="#4a4a4a" strokeWidth="1.2" />
              <polygon points="264,26 285,26 285,8 306,8 285,26 306,26" fill="#141414" stroke="#5a5a5a" strokeWidth="1.1" />
              <polygon points="268,26 285,12 302,26" fill="#7a0514" stroke="#d4a24c" strokeWidth="1" />
              <ellipse cx="285" cy="8" rx="10" ry="2.2" fill="#0a0a0a" stroke="#6a6a6a" strokeWidth="0.8" />
            </g>

            {/* sand box / rear light */}
            <g>
              <rect x="280" y="52" width="18" height="22" rx="2" fill="#0f0f0f" stroke="#d4a24c" strokeWidth="1" />
              <rect x="283" y="55" width="12" height="16" rx="1.6" fill="#1a1a1a" stroke="#8b641e" strokeWidth="0.7" />
              <rect x="286" y="59" width="6" height="8" rx="1" fill="#fff4b8" opacity="0.9" />
            </g>

            {/* smokebox front */}
            <circle cx="282" cy="73" r="12" fill="#141414" stroke="#4a4a4a" strokeWidth="1.2" />
            <circle cx="282" cy="73" r="8.4" fill="#0a0a0a" stroke="#d4a24c" strokeWidth="1" />
            <rect x="278" y="69" width="8" height="8" rx="1.4" fill="#1a1a1a" />

            {/* cowcatcher */}
            <g fill="#7a0514" stroke="#2c0208" strokeWidth="1">
              <polygon points="270,92 290,92 306,106 270,106" />
              <g stroke="#d4a24c" strokeWidth="0.7" fill="none" opacity="0.85">
                <line x1="274" y1="94" x2="302" y2="104" />
                <line x1="278" y1="96" x2="303" y2="102" />
                <line x1="282" y1="98" x2="303" y2="99" />
              </g>
            </g>

            {/* boiler connection front frame */}
            <rect x="270" y="58" width="4" height="30" rx="1.2" fill="#3a0109" stroke="#d4a24c" strokeWidth="0.7" />

            {/* small leading truck wheels */}
            <g>
              {[0, 1].map((i) => {
                const cx = 281 + i * 12;
                return (
                  <g key={`lw-${i}`}>
                    <circle cx={cx} cy="108" r="6.2" fill="#0e0e0e" stroke="#4a4a4a" strokeWidth="1.1" />
                    <circle cx={cx} cy="108" r="3.8" fill="#1a1a1a" />
                    <circle cx={cx} cy="108" r="2.2" fill="url(#wheel-hub-red)" />
                  </g>
                );
              })}
            </g>

            {/* main drive wheels */}
            <g>
              {[0, 1].map((i) => {
                const cx = 202 + i * 38;
                return (
                  <g key={`mw-${i}`}>
                    <circle cx={cx} cy="104" r="14.6" fill="#0a0a0a" stroke="#5a5a5a" strokeWidth="1.5" />
                    <circle cx={cx} cy="104" r="10.6" fill="#141414" />
                    <circle cx={cx} cy="104" r="7.8" fill="url(#wheel-hub-red)" />
                    <g stroke="#d4a24c" strokeWidth="0.9" opacity="0.95">
                      <line x1={cx - 9.2} y1="104" x2={cx + 9.2} y2="104" />
                      <line x1={cx} y1="94.8" x2={cx} y2="113.2" />
                      <line x1={cx - 6.6} y1="97.4" x2={cx + 6.6} y2="110.6" />
                      <line x1={cx + 6.6} y1="97.4" x2={cx - 6.6} y2="110.6" />
                    </g>
                    <circle cx={cx} cy="104" r="2.2" fill="#2d0208" />
                    {/* crank pin */}
                    <circle cx={cx + 7.2} cy="104" r="1.8" fill="#c7a05a" stroke="#6b4d13" strokeWidth="0.5" />
                  </g>
                );
              })}
              {/* side rods */}
              <line x1="209.2" y1="104" x2="247.2" y2="104" stroke="#8a8a8a" strokeWidth="1.8" />
              <line x1="209.2" y1="106.6" x2="247.2" y2="106.6" stroke="#5a5a5a" strokeWidth="0.8" />
              {/* crosshead */}
              <rect x="174" y="100.8" width="16" height="6.4" rx="1.4" fill="#242424" stroke="#5a5a5a" strokeWidth="0.8" />
              <line x1="174" y1="104" x2="202" y2="104" stroke="#c9c9c9" strokeWidth="1.4" />
            </g>
            {/* cylinder */}
            <rect x="186" y="88" width="22" height="12" rx="2.2" fill="#141414" stroke="#d4a24c" strokeWidth="1" />
          </g>
        </svg>
      </div>

      <div className="track-train track-train-blue" aria-hidden="true">
        <svg viewBox="0 0 320 140" className="track-locomotive-svg track-blue-svg" role="presentation">
          <defs>
            <linearGradient id="loco-blue-body" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1f3464" />
              <stop offset="50%" stopColor="#12244b" />
              <stop offset="100%" stopColor="#06122e" />
            </linearGradient>
            <linearGradient id="loco-blue-side" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#223a74" />
              <stop offset="100%" stopColor="#09193a" />
            </linearGradient>
            <linearGradient id="tender-blue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1c3063" />
              <stop offset="100%" stopColor="#06132f" />
            </linearGradient>
            <linearGradient id="coal-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5a3a1e" />
              <stop offset="45%" stopColor="#3c2410" />
              <stop offset="100%" stopColor="#1e1208" />
            </linearGradient>
            <radialGradient id="wheel-hub-blue" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffdede" />
              <stop offset="28%" stopColor="#e23648" />
              <stop offset="100%" stopColor="#7a0614" />
            </radialGradient>
            <linearGradient id="smoke-vol" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c9c9c9" stopOpacity="0" />
              <stop offset="35%" stopColor="#a8a8a8" stopOpacity="0.55" />
              <stop offset="65%" stopColor="#7a7a7a" stopOpacity="0.78" />
              <stop offset="100%" stopColor="#5a5a5a" stopOpacity="0.9" />
            </linearGradient>
            <filter id="smoke-blur" x="-10%" y="-20%" width="130%" height="200%">
              <feGaussianBlur stdDeviation="1.6" />
            </filter>
            <filter id="soft-shadow-blue" x="-10%" y="-10%" width="120%" height="130%">
              <feGaussianBlur stdDeviation="0.6" />
            </filter>
          </defs>

          {/* RAIL */}
          <g opacity="0.85">
            {Array.from({ length: 24 }).map((_, i) => (
              <rect key={`bs1-${i}`} x={-10 + i * 14} y="123" width="11" height="3.4" rx="0.6" fill="#2b1a10" stroke="#120a06" strokeWidth="0.3" />
            ))}
            <rect x="-10" y="119.8" width="340" height="1.8" fill="url(#rail-steel)" />
            <rect x="-10" y="126.6" width="340" height="1.8" fill="url(#rail-steel)" />
          </g>

          {/* ======= SMOKE (VOLUMETRIC, LIKE THE REFERENCE) ======= */}
          <g filter="url(#smoke-blur)" className="blue-smoke-layer">
            {/* back smoke trail */}
            <ellipse cx="120" cy="46" rx="78" ry="14" fill="url(#smoke-vol)" opacity="0.85" />
            <ellipse cx="148" cy="40" rx="64" ry="11" fill="#8e8e8e" opacity="0.65" />
            <ellipse cx="172" cy="35" rx="52" ry="9" fill="#a0a0a0" opacity="0.6" />
            <ellipse cx="192" cy="32" rx="40" ry="8" fill="#b5b5b5" opacity="0.55" />
            {/* puffs */}
            <g fill="#6a6a6a" opacity="0.75">
              <circle cx="236" cy="36" r="11.2" />
              <circle cx="250" cy="31" r="9.5" />
              <circle cx="220" cy="42" r="9" />
              <circle cx="202" cy="40" r="7.8" />
              <circle cx="180" cy="42" r="8.2" />
              <circle cx="158" cy="44" r="9.1" />
              <circle cx="136" cy="46" r="9.6" />
              <circle cx="112" cy="47" r="10" />
              <circle cx="88" cy="48" r="9.3" />
              <circle cx="64" cy="49" r="8.5" />
            </g>
            <g fill="#8e8e8e" opacity="0.5">
              <circle cx="230" cy="38" r="14" className="smoke-puff smoke-puff-1" />
              <circle cx="198" cy="42" r="12" className="smoke-puff smoke-puff-2" />
              <circle cx="162" cy="46" r="13" className="smoke-puff smoke-puff-3" />
              <circle cx="122" cy="49" r="14" className="smoke-puff smoke-puff-1" />
              <circle cx="82" cy="50" r="12" className="smoke-puff smoke-puff-2" />
            </g>
          </g>

          {/* TENDER BLUE */}
          <g filter="url(#soft-shadow-blue)" transform="translate(-2,2)">
            <rect x="12" y="66" width="118" height="40" rx="5" fill="url(#tender-blue)" stroke="#031028" strokeWidth="1.2" />
            <rect x="18" y="74" width="106" height="20" rx="3" fill="#051636" opacity="0.55" />
            {/* coal pile */}
            <g fill="url(#coal-grad)">
              <polygon points="18,66 28,50 38,56 48,46 60,54 72,44 86,55 98,48 110,56 124,66" />
              <rect x="24" y="56" width="12" height="10" rx="2" />
              <rect x="40" y="52" width="10" height="14" rx="1.8" />
              <rect x="54" y="56" width="11" height="10" rx="1.9" />
              <rect x="68" y="50" width="13" height="16" rx="2" />
              <rect x="84" y="54" width="11" height="12" rx="1.7" />
              <rect x="98" y="52" width="12" height="14" rx="1.8" />
              <rect x="112" y="56" width="10" height="10" rx="1.5" />
            </g>
            <g fill="#2a170a" opacity="0.9">
              <circle cx="30" cy="60" r="1.8" />
              <circle cx="46" cy="58" r="1.5" />
              <circle cx="58" cy="62" r="2" />
              <circle cx="74" cy="58" r="1.7" />
              <circle cx="90" cy="61" r="1.6" />
              <circle cx="104" cy="59" r="1.9" />
              <circle cx="116" cy="62" r="1.5" />
              <circle cx="38" cy="54" r="1.3" />
              <circle cx="70" cy="52" r="1.4" />
              <circle cx="100" cy="54" r="1.5" />
            </g>
            {/* gold trim */}
            <rect x="18" y="84" width="106" height="14" rx="2" fill="none" stroke="#d4a24c" strokeWidth="1.4" />
            {/* tender name plate */}
            <rect x="140" y="80" width="3" height="10" fill="#2a2a2a" />
            <circle cx="146" cy="85" r="2.3" fill="none" stroke="#4a4a4a" strokeWidth="1.2" />
            {/* wheels */}
            <g>
              {[0, 1, 2, 3].map((i) => {
                const cx = 29 + i * 32;
                return (
                  <g key={`bw-${i}`}>
                    <circle cx={cx} cy="116" r="8.4" fill="#0c0c0c" stroke="#4a4a4a" strokeWidth="1.3" />
                    <circle cx={cx} cy="116" r="5.6" fill="#1a1a1a" />
                    <g stroke="#7a7a7a" strokeWidth="0.7">
                      <line x1={cx - 4.8} y1="116" x2={cx + 4.8} y2="116" />
                      <line x1={cx} y1="111.2" x2={cx} y2="120.8" />
                      <line x1={cx - 3.4} y1="112.6" x2={cx + 3.4} y2="119.4" />
                      <line x1={cx + 3.4} y1="112.6" x2={cx - 3.4} y2="119.4" />
                    </g>
                    <circle cx={cx} cy="116" r="1.6" fill="#2c2c2c" />
                  </g>
                );
              })}
            </g>
          </g>

          {/* CAB + BOILER BLUE LOCOMOTIVE */}
          <g filter="url(#soft-shadow-blue)" transform="translate(-2,2)">
            {/* cab step */}
            <rect x="136" y="96" width="14" height="10" fill="#161616" stroke="#3a3a3a" strokeWidth="0.9" />
            <g stroke="#4a4a4a" strokeWidth="0.6">
              <line x1="137" y1="99" x2="149" y2="99" />
              <line x1="137" y1="102" x2="149" y2="102" />
            </g>
            {/* cab body */}
            <rect x="138" y="52" width="58" height="54" rx="4" fill="url(#loco-blue-body)" stroke="#02081a" strokeWidth="1.2" />
            {/* roof */}
            <rect x="132" y="44" width="74" height="10" rx="2.2" fill="#7a0514" stroke="#2c0208" strokeWidth="1.1" />
            <polygon points="132,54 134,44 206,44 204,54" fill="#a6182d" opacity="0.9" />
            <rect x="132" y="42" width="74" height="3" rx="1.1" fill="#d4a24c" opacity="0.85" />

            {/* window */}
            <g>
              <rect x="160" y="58" width="30" height="22" rx="2" fill="#081a33" stroke="#d4a24c" strokeWidth="1.4" />
              <line x1="175" y1="58" x2="175" y2="80" stroke="#d4a24c" strokeWidth="0.9" />
              <line x1="160" y1="69" x2="190" y2="69" stroke="#d4a24c" strokeWidth="0.9" />
              <polygon points="160,58 190,58 187,63 163,63" fill="#8ac0ff" opacity="0.35" />
            </g>

            {/* builder plate / name */}
            <rect x="144" y="76" width="18" height="12" rx="1.8" fill="#071736" stroke="#d4a24c" strokeWidth="1" />
            <rect x="146.5" y="78.5" width="13" height="7" rx="1" fill="#d4a24c" opacity="0.2" />
            <g stroke="#d4a24c" strokeWidth="0.5">
              <line x1="148" y1="81" x2="158" y2="81" />
              <line x1="149" y1="83.5" x2="156" y2="83.5" />
            </g>

            {/* boiler */}
            <rect x="186" y="62" width="86" height="38" rx="7" fill="url(#loco-blue-side)" stroke="#020a1d" strokeWidth="1.3" />
            {/* gold boiler bands */}
            <g stroke="#d4a24c" strokeWidth="1.4" opacity="0.95">
              <line x1="202" y1="64" x2="202" y2="98" />
              <line x1="224" y1="64" x2="224" y2="98" />
              <line x1="248" y1="64" x2="248" y2="98" />
            </g>
            {/* brass dome */}
            <g>
              <rect x="204" y="48" width="22" height="16" rx="3.2" fill="#061636" stroke="#d4a24c" strokeWidth="1.1" />
              <circle cx="215" cy="44" r="3.6" fill="#d4a24c" opacity="0.95" />
              <rect x="209" y="40" width="12" height="5.5" rx="1.4" fill="#e8c271" />
              <polygon points="208,40 222,40 220,36 210,36" fill="#d4a24c" />
            </g>
            {/* sand dome */}
            <g>
              <rect x="244" y="50" width="18" height="14" rx="2.6" fill="#061636" stroke="#d4a24c" strokeWidth="1" />
              <circle cx="253" cy="46" r="3" fill="#e8c271" />
            </g>
            {/* brass bell */}
            <g transform="translate(230,42)">
              <rect x="-1.6" y="-6" width="3.2" height="6" fill="#6b4d13" />
              <polygon points="-7,-4 7,-4 6,3 -6,3" fill="#d4a24c" stroke="#8b641e" strokeWidth="0.8" />
              <ellipse cx="0" cy="3" rx="7" ry="1.6" fill="#a17b2a" />
              <circle cx="0" cy="4.5" r="1.1" fill="#4a3510" />
            </g>
            {/* whistle */}
            <g transform="translate(256,44)">
              <rect x="-1.5" y="-10" width="3" height="12" rx="0.8" fill="#d4a24c" />
              <rect x="-2.5" y="-14" width="5" height="5" rx="1" fill="#0c0c0c" stroke="#d4a24c" strokeWidth="0.7" />
            </g>

            {/* pipes */}
            <g fill="none" stroke="#d4a24c" strokeWidth="1.3" opacity="0.95">
              <path d="M206 58 C 210 52, 218 52, 222 58 L 222 86" />
              <path d="M222 86 C 228 88, 240 88, 246 86" />
              <path d="M246 86 L 246 58 C 250 52, 258 52, 262 58" />
            </g>
            <circle cx="222" cy="92" r="4.2" fill="#070707" stroke="#d4a24c" strokeWidth="1.2" />
            <circle cx="222" cy="92" r="1.8" fill="#030711" />

            {/* smokestack diamond */}
            <g>
              <rect x="274" y="16" width="22" height="14" rx="2" fill="#131f38" stroke="#4a6bb0" strokeWidth="1" />
              <rect x="270" y="28" width="30" height="22" rx="3" fill="#1a2c54" stroke="#5a7cc3" strokeWidth="1.2" />
              <polygon points="264,32 285,32 285,14 306,14 285,32 306,32" fill="#102044" stroke="#6e8cd2" strokeWidth="1.1" />
              <polygon points="268,32 285,18 302,32" fill="#1d3466" stroke="#d4a24c" strokeWidth="1" />
              <ellipse cx="285" cy="14" rx="10.5" ry="2.4" fill="#090f24" stroke="#8097d6" strokeWidth="0.9" />
            </g>

            {/* rear light box */}
            <g>
              <rect x="280" y="60" width="18" height="22" rx="2" fill="#0d162d" stroke="#d4a24c" strokeWidth="1.1" />
              <rect x="283" y="63" width="12" height="16" rx="1.6" fill="#192343" stroke="#8b641e" strokeWidth="0.7" />
              <rect x="286" y="67" width="6" height="8" rx="1" fill="#fff4b8" opacity="0.95" />
              <polygon points="286,67 292,67 291,70 287,70" fill="#ffffff" opacity="0.7" />
            </g>

            {/* smokebox front */}
            <circle cx="282" cy="81" r="12.6" fill="#0c1732" stroke="#5a7cc3" strokeWidth="1.3" />
            <circle cx="282" cy="81" r="8.8" fill="#050c1f" stroke="#d4a24c" strokeWidth="1" />
            <rect x="278" y="77" width="8" height="8" rx="1.4" fill="#111f42" />
            <circle cx="282" cy="81" r="1.3" fill="#d4a24c" />

            {/* cowcatcher */}
            <g fill="#7a0514" stroke="#2c0208" strokeWidth="1">
              <polygon points="270,100 290,100 306,114 270,114" />
              <g stroke="#d4a24c" strokeWidth="0.8" fill="none" opacity="0.9">
                <line x1="274" y1="102" x2="302" y2="112" />
                <line x1="278" y1="104" x2="303" y2="110" />
                <line x1="282" y1="106" x2="303" y2="107" />
              </g>
            </g>

            {/* front frame */}
            <rect x="270" y="66" width="4" height="32" rx="1.2" fill="#030a1d" stroke="#d4a24c" strokeWidth="0.7" />

            {/* leading truck */}
            <g>
              {[0, 1].map((i) => {
                const cx = 281 + i * 12;
                return (
                  <g key={`blw-${i}`}>
                    <circle cx={cx} cy="116" r="6.4" fill="#0a0a0a" stroke="#4a4a4a" strokeWidth="1.1" />
                    <circle cx={cx} cy="116" r="3.9" fill="#161616" />
                    <circle cx={cx} cy="116" r="2.3" fill="url(#wheel-hub-blue)" />
                  </g>
                );
              })}
            </g>

            {/* eagle medallion between domes */}
            <g transform="translate(230,74)">
              <circle cx="0" cy="0" r="5" fill="#061636" stroke="#d4a24c" strokeWidth="0.9" />
              <circle cx="0" cy="0" r="3.2" fill="#d4a24c" opacity="0.25" />
              <circle cx="0" cy="0" r="1.6" fill="#d4a24c" opacity="0.85" />
            </g>

            {/* driver wheels */}
            <g>
              {[0, 1].map((i) => {
                const cx = 202 + i * 38;
                return (
                  <g key={`bmw-${i}`}>
                    <circle cx={cx} cy="112" r="15" fill="#070707" stroke="#5a5a5a" strokeWidth="1.5" />
                    <circle cx={cx} cy="112" r="11" fill="#0f0f0f" />
                    <circle cx={cx} cy="112" r="8" fill="url(#wheel-hub-blue)" />
                    <g stroke="#d4a24c" strokeWidth="1" opacity="0.95">
                      <line x1={cx - 9.5} y1="112" x2={cx + 9.5} y2="112" />
                      <line x1={cx} y1="102.5" x2={cx} y2="121.5" />
                      <line x1={cx - 6.8} y1="105.2" x2={cx + 6.8} y2="118.8" />
                      <line x1={cx + 6.8} y1="105.2" x2={cx - 6.8} y2="118.8" />
                    </g>
                    <circle cx={cx} cy="112" r="2.3" fill="#14030a" />
                    <circle cx={cx + 7.5} cy="112" r="2" fill="#d4a24c" stroke="#6b4d13" strokeWidth="0.5" />
                  </g>
                );
              })}
              <line x1="209.5" y1="112" x2="247.5" y2="112" stroke="#8f8f8f" strokeWidth="1.9" />
              <line x1="209.5" y1="114.6" x2="247.5" y2="114.6" stroke="#5a5a5a" strokeWidth="0.9" />
              <rect x="174" y="108.8" width="16" height="6.5" rx="1.5" fill="#1f1f1f" stroke="#5a5a5a" strokeWidth="0.8" />
              <line x1="174" y1="112" x2="202" y2="112" stroke="#cfcfcf" strokeWidth="1.5" />
            </g>
            <rect x="186" y="96" width="22" height="12" rx="2.2" fill="#0c0c0c" stroke="#d4a24c" strokeWidth="1.1" />
          </g>
        </svg>
      </div>

    </>
  );
}
