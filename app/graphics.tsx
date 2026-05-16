import type { ReactNode } from "react";

const ONESTREAM_MARK_PATH =
  "M1291.661301 1156.208007c5.616-7.341333 11.254666-14.628 16.605333-22.208 8.010666-11.356 15.458666-23.074665 22.82-34.903998 4.953333-7.989334 9.98-15.904 14.646666-24.117333 7.16-12.606667 13.666666-25.564 20.093333-38.628 3.853333-7.877332 7.826666-15.642666 11.413333-23.695999 6.426666-14.42 12.08-29.207999 17.586666-44.117332 2.666666-7.256 5.52-14.388 7.96-21.766666 5.306666-16.005333 9.733333-32.366666 13.933333-48.855999 1.36-5.292 3.24-10.308 4.466666-15.66.6-2.573333.986667-5.148 1.546667-7.722666 1.506666-6.914666 2.853333-13.861333 4.173333-20.850666 3.6-19.032 6.666666-38.042666 8.693333-57.005332.4-3.804.546667-7.676.893333-11.505333 1.693334-18.622666 2.586667-37.181332 2.813334-55.659999.04-3.202666.293333-13.138666.266666-14.968-.106666-12.361332-.64-24.649332-1.386666-36.903998-.8-13.745333-2.12-27.341333-3.68-40.873333-.373334-3.052-.653334-6.116-1.053334-9.164-5.373333-41.855998-13.906666-82.718664-26.146666-122.00533h-139.007996c27.933333 71.373332 42.931999 149.231997 40.591999 231.053328-8.972 313.801325-272.789327 571.424119-586.717319 572.676119-105.426664.419867-204.259995-27.036133-289.917326-75.229465-.616-.350667-1.233333-.670667-1.850666-1.021333-3.212-1.82-6.16-4.032-9.34-5.909333 163.903996-62.951999 294.893326-203.330662 337.361325-386.88399L807.31998 628.92002c22.298666-96.382664 76.567998-177.149329 149.010663-233.783994 72.823998-56.933332 165.133329-83.037331 257.57066-83.351998l66.163998-.225333h32.361333c-18.649333-27.005333-39.286666-52.505332-61.350665-76.675998.053333.010666.106666.021333.158666.032-.925333-1.021334-1.936-1.984-2.904-2.968-16.84-18.233333-34.478665-35.701333-53.095998-52.122665-.872-.797334-1.701334-1.632-2.584-2.409334-.085333 0-.170667.010667-.245333.021334-54.233332-47.334666-115.595998-86.609332-182.29733-116.102664-.5-.226667-1.010666-.426667-1.510666-.653334-12.766666-5.6-25.702666-10.866666-38.851999-15.733332-1.286667-.48-2.594667-.92-3.893333-1.4-12.542666-4.573334-25.212-8.813334-38.064-12.706667-1.776-.533333-3.584-1.026666-5.372-1.546666-12.457332-3.653334-25.021332-7-37.743998-10-.884-.2-1.734667-.48-2.617333-.693333-.861334-.2-1.713334-.253334-2.574667-.453334-43.425332-9.853333-88.329331-15.746666-134.36133-17.36-4.5-.16-8.989333-.333333-13.478666-.413333-3.968-.066666-7.873333-.373333-11.852-.373333-8.797333 0-17.34 1-26.062666 1.32-12.277333.44-24.564.773333-36.734666 1.853333-13.404 1.16-26.542666 3.066667-39.734665 4.96-9.552 1.386667-19.126667 2.586667-28.594666 4.36-15.830667 2.92-31.341333 6.64-46.809333 10.573333-6.404 1.653333-12.850666 3.12-19.212 4.946667-17.595999 5-34.809332 10.84-51.830664 17.12-4.126667 1.533333-8.297334 2.933332-12.393333 4.533332-18.149333 7.093334-35.818666 14.973333-53.212 23.453333-3.117332 1.52-6.277332 2.946667-9.373332 4.506667-17.425333 8.813333-34.329333 18.373333-50.903999 28.506666-3.212 1.968-6.457333 3.850666-9.649333 5.866666-15.722666 9.968-30.914666 20.585333-45.786666 31.713333-3.978666 2.968-8 5.861333-11.925333 8.914666-13.521333 10.553333-26.521332 21.653333-39.245332 33.126666-4.882667 4.389333-9.797333 8.713333-14.564 13.234666-11.297333 10.761333-22.094666 21.978666-32.669332 33.446666-5.489333 5.925333-10.989333 11.788-16.277333 17.904-9.446666 10.946666-18.361333 22.282666-27.148 33.787999-5.489333 7.18-11 14.292-16.223866 21.696-8.138533 11.537332-15.712933 23.441332-23.170266 35.462665-4.840666 7.809333-9.7552 15.532-14.3084 23.553333-7.276533 12.788-13.893732 25.941333-20.393732 39.207999-3.766133 7.692-7.648933 15.270666-11.148933 23.138666-6.521333 14.626666-12.266133 29.632-17.829733 44.754666-2.585333 7.037333-5.350933 13.946666-7.723333 21.101332-5.404267 16.249333-9.904267 32.850666-14.149067 49.596-1.3088 5.111999-3.1276 9.957332-4.3192 15.121332-.574533 2.485333-.946933 4.969333-1.4896 7.453333-1.553066 7.094667-2.924933 14.222667-4.276026 21.393333-3.564067 18.893333-6.628133 37.776-8.638546 56.606665-.415107 3.936-.564067 7.936-.92552 11.882667-1.67032 18.5-2.564066 36.925332-2.787503 55.275998-.042187 3.245333-.297396 13.288-.276562 15.138667.10677 12.058666.648958 24.047999 1.361985 36.005332.797906 14.005333 2.10624 27.856 3.70208 41.638666.361453 3.08.64896 6.18 1.05312 9.26 5.3724 41.819998 13.893772 82.64933 26.117239 121.903996h139.02053c-41.210666-105.34533-54.247599-224.84666-24.934666-350.293324 52.553332-224.898661 236.707994-401.657324 463.882655-443.29199 150.494663-27.581332 292.011992 3.182667 408.33999 72.117332-163.92533 62.957332-294.91466 203.314662-337.382659 386.88399l-48.894665 211.361329c-22.297333 96.394664-76.577332 177.158662-149.02533 233.78666-72.859998 56.949332-165.221329 83.033332-257.695993 83.290665l-65.351999.182667h-33.106932c33.521599 48.558665 72.925598 92.69733 117.04293 131.63333.936.845333 1.808 1.756 2.765333 2.585333.085334 0 .170667-.010667.266667-.021333 54.179999 47.286799 115.45733 86.526398 182.073329 116.02013.788.346267 1.596.666667 2.384 1.012934 12.468 5.466666 25.085333 10.6 37.903999 15.36 1.628.613466 3.286667 1.1604 4.925333 1.7604 12.192 4.426532 24.510666 8.572932 36.989333 12.346265 2.138666.653734 4.308 1.240134 6.446666 1.853734 12.085333 3.533333 24.266666 6.8 36.606666 9.6932 1.021333.253066 2.010666.573466 3.042666.8136 1 .239466 1.989334.306133 2.989334.5328 43.170665 9.773386 87.786664 15.62704 133.531996 17.240058 4.744.173437 9.478667.373437 14.222667.453645 3.852.066667 7.638666.359896 11.510666.359896 8.553333 0 16.852-.986979 25.330666-1.280208 12.616-.453125 25.222666-.800005 37.722666-1.906765 13.085333-1.133334 25.914666-3 38.787999-4.839587 9.882666-1.42656 19.776-2.680213 29.553332-4.506773 15.552-2.866667 30.786666-6.533333 45.968-10.3864 6.690666-1.7204 13.403999-3.253733 20.021332-5.160533 17.361333-4.933333 34.308-10.6796 51.105332-16.866666 4.373333-1.626534 8.788-3.106667 13.128-4.812933 17.893333-7 35.329332-14.787067 52.499998-23.133333 3.361334-1.640133 6.756-3.173467 10.096-4.866667 17.202666-8.693733 33.904-18.146933 50.275999-28.160399 3.405333-2.069333 6.852-4.069333 10.234666-6.207867 15.553333-9.866666 30.596-20.382799 45.308-31.382532 4.128-3.074667 8.287999-6.064 12.351999-9.229333 13.372-10.446667 26.233333-21.436 38.839999-32.786666 5.021333-4.510667 10.074666-8.957333 14.968-13.612 11.149333-10.616 21.786666-21.68 32.234665-32.989332 5.637334-6.085333 11.297334-12.117333 16.722667-18.404 9.297333-10.776 18.074666-21.936 26.723999-33.259999";

export function OneStreamMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 1439.5732 1440" aria-hidden="true">
      <path fill="currentColor" d={ONESTREAM_MARK_PATH} />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="logo">
      <OneStreamMark />
      <span>onestream</span>
    </span>
  );
}

export function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M 10.5 10.5 L 14 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M 1 0 L 10 5 L 1 10 Z" fill="#111" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg className="check" width="12" height="12" viewBox="0 0 14 14" aria-hidden="true">
      <circle cx="7" cy="7" r="6.5" fill="#3da66b" />
      <path d="M 4 7.2 L 6 9 L 10 5" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M 9 2 V 16 M 2 9 H 16" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function MinusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M 2 9 H 16" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const govIconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 28 28",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function UnifiedDataIcon() {
  return (
    <svg {...govIconProps}>
      <path d="M 3 8 L 8.5 11" />
      <path d="M 3 14 H 8.5" />
      <path d="M 3 20 L 8.5 17" />
      <ellipse cx="17.5" cy="8" rx="6" ry="2.2" />
      <path d="M 11.5 8 V 20 C 11.5 21.21 14.19 22.2 17.5 22.2 C 20.81 22.2 23.5 21.21 23.5 20 V 8" />
      <path d="M 11.5 14 C 11.5 15.21 14.19 16.2 17.5 16.2 C 20.81 16.2 23.5 15.21 23.5 14" />
    </svg>
  );
}

export function SemanticIcon() {
  return (
    <svg {...govIconProps}>
      <path d="M 4 8 C 4 6.34 5.34 5 7 5 H 21 C 22.66 5 24 6.34 24 8 V 17 C 24 18.66 22.66 20 21 20 H 14 L 9 24 V 20 H 7 C 5.34 20 4 18.66 4 17 Z" />
      <path d="M 9 15 V 12.5" />
      <path d="M 14 15 V 9.5" />
      <path d="M 19 15 V 11" />
    </svg>
  );
}

export function DeterministicIcon() {
  return (
    <svg {...govIconProps}>
      <path d="M 14 3 V 5.5" />
      <path d="M 14 22.5 V 25" />
      <path d="M 3 14 H 5.5" />
      <path d="M 22.5 14 H 25" />
      <path d="M 6.2 6.2 L 8 8" />
      <path d="M 20 20 L 21.8 21.8" />
      <path d="M 6.2 21.8 L 8 20" />
      <path d="M 20 8 L 21.8 6.2" />
      <circle cx="14" cy="14" r="6" />
      <path d="M 11.2 14 L 13.4 16.2 L 16.8 12.4" />
    </svg>
  );
}

export function MCPConnectivityIcon() {
  return (
    <svg {...govIconProps}>
      <circle cx="14" cy="14" r="3" />
      <circle cx="14" cy="5" r="2" />
      <circle cx="14" cy="23" r="2" />
      <circle cx="5" cy="14" r="2" />
      <circle cx="23" cy="14" r="2" />
      <path d="M 14 11 V 7" />
      <path d="M 14 17 V 21" />
      <path d="M 11 14 H 7" />
      <path d="M 17 14 H 21" />
    </svg>
  );
}

export function GovernanceIcon() {
  return (
    <svg {...govIconProps}>
      <path d="M 14 3 L 23 6 V 13 C 23 18.5 19 22.5 14 25 C 9 22.5 5 18.5 5 13 V 6 Z" />
      <path d="M 9.5 14 L 12.8 17.2 L 18.5 11" />
    </svg>
  );
}

export function TraceabilityIcon() {
  return (
    <svg {...govIconProps}>
      <path d="M 5 4 H 16 L 20 8 V 17 H 5 Z" />
      <path d="M 16 4 V 8 H 20" />
      <path d="M 8 12 H 14" />
      <path d="M 8 15 H 12" />
      <circle cx="17" cy="19" r="3" />
      <path d="M 19.2 21.2 L 22.5 24.5" />
    </svg>
  );
}

export function BarChartIcon() {
  // Many sources of data converge on a single luminous truth core.
  return (
    <svg className="diff-anim diff-truth" viewBox="0 0 220 150" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id="truthStream" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#a884ff" stopOpacity="0" />
          <stop offset="55%" stopColor="#7c4dff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#5a2bd6" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id="truthCore" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#5a2bd6" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#7c4dff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#a884ff" stopOpacity="0" />
        </radialGradient>
        <filter id="truthBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>

        <path id="TR1" d="M -10 18  C 50 30  110 55  175 78" />
        <path id="TR2" d="M -10 50  C 60 58  120 70  175 78" />
        <path id="TR3" d="M -10 78  C 70 78  125 78  175 78" />
        <path id="TR4" d="M -10 106 C 60 100 120 88  175 78" />
        <path id="TR5" d="M -10 138 C 50 124 110 100 175 78" />
      </defs>

      {/* faint base streams */}
      <g fill="none" stroke="url(#truthStream)" strokeWidth="0.7" opacity="0.5">
        <use href="#TR1" />
        <use href="#TR2" />
        <use href="#TR3" />
        <use href="#TR4" />
        <use href="#TR5" />
      </g>

      {/* dashed flow streams */}
      <g fill="none" strokeWidth="1.2" strokeLinecap="round">
        <use href="#TR1" stroke="url(#truthStream)" className="t-stream" />
        <use href="#TR2" stroke="url(#truthStream)" className="t-stream fast" />
        <use href="#TR3" stroke="url(#truthStream)" className="t-stream" />
        <use href="#TR4" stroke="url(#truthStream)" className="t-stream slow" />
        <use href="#TR5" stroke="url(#truthStream)" className="t-stream fast" />
      </g>

      {/* truth core */}
      <g className="t-glow">
        <circle cx="175" cy="78" r="50" fill="url(#truthCore)" />
        <circle cx="175" cy="78" r="26" fill="url(#truthCore)" />
        <circle cx="175" cy="78" r="11" fill="url(#truthCore)" />
      </g>
      <circle cx="175" cy="78" r="4.2" fill="#5a2bd6" />
      <circle cx="175" cy="78" r="1.6" fill="#5a2bd6" />

      {/* particles riding the streams */}
      <circle r="1.6" fill="#5a2bd6">
        <animateMotion dur="3.6s" repeatCount="indefinite"><mpath href="#TR1" /></animateMotion>
      </circle>
      <circle r="1.4" fill="#7c4dff">
        <animateMotion dur="4.2s" begin="0.7s" repeatCount="indefinite"><mpath href="#TR2" /></animateMotion>
      </circle>
      <circle r="1.8" fill="#5a2bd6">
        <animateMotion dur="5.0s" begin="1.4s" repeatCount="indefinite"><mpath href="#TR3" /></animateMotion>
      </circle>
      <circle r="1.4" fill="#7c4dff">
        <animateMotion dur="3.8s" begin="2.1s" repeatCount="indefinite"><mpath href="#TR4" /></animateMotion>
      </circle>
      <circle r="1.6" fill="#5a2bd6">
        <animateMotion dur="4.6s" begin="0.4s" repeatCount="indefinite"><mpath href="#TR5" /></animateMotion>
      </circle>

      <style>{`
        .diff-truth .t-stream { stroke-dasharray: 2 14; animation: t-flow 7s linear infinite; }
        .diff-truth .t-stream.slow { animation-duration: 11s; }
        .diff-truth .t-stream.fast { animation-duration: 5s; }
        .diff-truth .t-glow { animation: t-pulse 3.4s ease-in-out infinite; transform-origin: 175px 78px; }
        @keyframes t-flow { to { stroke-dashoffset: -240; } }
        @keyframes t-pulse {
          0%, 100% { opacity: 0.7; }
          50%      { opacity: 1; }
        }
      `}</style>
    </svg>
  );
}

export function BrainIcon() {
  // Organic input streams pass through a luminous lens and emerge as ordered output.
  return (
    <svg className="diff-anim diff-intel" viewBox="0 0 220 150" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id="intelStreamIn" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#a884ff" stopOpacity="0" />
          <stop offset="100%" stopColor="#5a2bd6" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="intelStreamOut" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#5a2bd6" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#a884ff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="intelLens" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#5a2bd6" stopOpacity="0.55" />
          <stop offset="40%" stopColor="#7c4dff" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#a884ff" stopOpacity="0" />
        </radialGradient>
        <filter id="intelBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>

        <path id="IN1" d="M -10 18  C 30 38  75 65  110 75" />
        <path id="IN2" d="M -10 56  C 35 64  80 72  110 75" />
        <path id="IN3" d="M -10 94  C 35 88  80 80  110 75" />
        <path id="IN4" d="M -10 134 C 30 116 75 88  110 75" />

        <path id="OUT1" d="M 110 75 C 145 58  185 52  240 50" />
        <path id="OUT2" d="M 110 75 C 145 70  185 68  240 67" />
        <path id="OUT3" d="M 110 75 C 145 80  185 84  240 84" />
        <path id="OUT4" d="M 110 75 C 145 94  185 102 240 105" />
      </defs>

      {/* faint base streams */}
      <g fill="none" strokeWidth="0.7" opacity="0.45">
        <use href="#IN1" stroke="url(#intelStreamIn)" />
        <use href="#IN2" stroke="url(#intelStreamIn)" />
        <use href="#IN3" stroke="url(#intelStreamIn)" />
        <use href="#IN4" stroke="url(#intelStreamIn)" />
        <use href="#OUT1" stroke="url(#intelStreamOut)" />
        <use href="#OUT2" stroke="url(#intelStreamOut)" />
        <use href="#OUT3" stroke="url(#intelStreamOut)" />
        <use href="#OUT4" stroke="url(#intelStreamOut)" />
      </g>

      {/* dashed flow */}
      <g fill="none" strokeWidth="1.2" strokeLinecap="round">
        <use href="#IN1" stroke="url(#intelStreamIn)" className="i-stream" />
        <use href="#IN2" stroke="url(#intelStreamIn)" className="i-stream slow" />
        <use href="#IN3" stroke="url(#intelStreamIn)" className="i-stream" />
        <use href="#IN4" stroke="url(#intelStreamIn)" className="i-stream fast" />
        <use href="#OUT1" stroke="url(#intelStreamOut)" className="i-stream" />
        <use href="#OUT2" stroke="url(#intelStreamOut)" className="i-stream slow" />
        <use href="#OUT3" stroke="url(#intelStreamOut)" className="i-stream fast" />
        <use href="#OUT4" stroke="url(#intelStreamOut)" className="i-stream" />
      </g>

      {/* lens */}
      <g className="i-lens">
        <ellipse cx="110" cy="75" rx="34" ry="46" fill="url(#intelLens)" />
        <ellipse cx="110" cy="75" rx="16" ry="26" fill="url(#intelLens)" />
      </g>
      <ellipse cx="110" cy="75" rx="3" ry="7" fill="#5a2bd6" />

      {/* particles flowing through the lens */}
      <circle r="1.5" fill="#5a2bd6">
        <animateMotion dur="4s" repeatCount="indefinite"><mpath href="#IN1" /></animateMotion>
      </circle>
      <circle r="1.5" fill="#5a2bd6">
        <animateMotion dur="4s" begin="-0.5s" repeatCount="indefinite"><mpath href="#OUT1" /></animateMotion>
      </circle>
      <circle r="1.4" fill="#7c4dff">
        <animateMotion dur="4.6s" begin="1.2s" repeatCount="indefinite"><mpath href="#IN3" /></animateMotion>
      </circle>
      <circle r="1.4" fill="#7c4dff">
        <animateMotion dur="4.6s" begin="0.6s" repeatCount="indefinite"><mpath href="#OUT3" /></animateMotion>
      </circle>
      <circle r="1.6" fill="#5a2bd6">
        <animateMotion dur="3.6s" begin="2s" repeatCount="indefinite"><mpath href="#IN2" /></animateMotion>
      </circle>
      <circle r="1.6" fill="#5a2bd6">
        <animateMotion dur="3.6s" begin="1.4s" repeatCount="indefinite"><mpath href="#OUT2" /></animateMotion>
      </circle>
      <circle r="1.4" fill="#7c4dff">
        <animateMotion dur="5.2s" begin="2.4s" repeatCount="indefinite"><mpath href="#IN4" /></animateMotion>
      </circle>
      <circle r="1.4" fill="#7c4dff">
        <animateMotion dur="5.2s" begin="1.8s" repeatCount="indefinite"><mpath href="#OUT4" /></animateMotion>
      </circle>

      <style>{`
        .diff-intel .i-stream { stroke-dasharray: 2 14; animation: i-flow 7s linear infinite; }
        .diff-intel .i-stream.slow { animation-duration: 11s; }
        .diff-intel .i-stream.fast { animation-duration: 5s; }
        .diff-intel .i-lens { animation: i-pulse 3.6s ease-in-out infinite; transform-origin: 110px 75px; }
        @keyframes i-flow { to { stroke-dashoffset: -240; } }
        @keyframes i-pulse {
          0%, 100% { opacity: 0.65; }
          50%      { opacity: 1; }
        }
      `}</style>
    </svg>
  );
}

export function BankIcon() {
  // A central core radiates streams to satellite destinations that pulse in turn.
  return (
    <svg className="diff-anim diff-reach" viewBox="0 0 220 150" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <radialGradient id="reachCore" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#5a2bd6" stopOpacity="0.6" />
          <stop offset="55%" stopColor="#7c4dff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#a884ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="reachSat" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#5a2bd6" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#7c4dff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#a884ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="reachStream" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#5a2bd6" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#a884ff" stopOpacity="0" />
        </linearGradient>
        <filter id="reachBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>

        {/* paths from core (50,75) out to satellites */}
        <path id="RC1" d="M 50 75 C 78 56  108 36  138 24" />
        <path id="RC2" d="M 50 75 C 90 64  140 50  192 42" />
        <path id="RC3" d="M 50 75 C 100 75 150 78  198 80" />
        <path id="RC4" d="M 50 75 C 90 88  140 104 184 118" />
        <path id="RC5" d="M 50 75 C 78 96  108 116 138 130" />
      </defs>

      {/* faint base */}
      <g fill="none" stroke="url(#reachStream)" strokeWidth="0.7" opacity="0.5">
        <use href="#RC1" />
        <use href="#RC2" />
        <use href="#RC3" />
        <use href="#RC4" />
        <use href="#RC5" />
      </g>

      {/* dashed flow */}
      <g fill="none" stroke="url(#reachStream)" strokeWidth="1.2" strokeLinecap="round">
        <use href="#RC1" className="r-stream" />
        <use href="#RC2" className="r-stream slow" />
        <use href="#RC3" className="r-stream" />
        <use href="#RC4" className="r-stream fast" />
        <use href="#RC5" className="r-stream slow" />
      </g>

      {/* core */}
      <g className="r-core">
        <circle cx="50" cy="75" r="42" fill="url(#reachCore)" />
        <circle cx="50" cy="75" r="22" fill="url(#reachCore)" />
      </g>
      <circle cx="50" cy="75" r="5" fill="#5a2bd6" />
      <circle cx="50" cy="75" r="2.2" fill="#5a2bd6" />

      {/* satellites */}
      <g className="r-sat r-sat-1">
        <circle cx="138" cy="24" r="14" fill="url(#reachSat)" />
        <circle cx="138" cy="24" r="2.6" fill="#5a2bd6" />
      </g>
      <g className="r-sat r-sat-2">
        <circle cx="192" cy="42" r="14" fill="url(#reachSat)" />
        <circle cx="192" cy="42" r="2.6" fill="#5a2bd6" />
      </g>
      <g className="r-sat r-sat-3">
        <circle cx="198" cy="80" r="14" fill="url(#reachSat)" />
        <circle cx="198" cy="80" r="2.6" fill="#5a2bd6" />
      </g>
      <g className="r-sat r-sat-4">
        <circle cx="184" cy="118" r="14" fill="url(#reachSat)" />
        <circle cx="184" cy="118" r="2.6" fill="#5a2bd6" />
      </g>
      <g className="r-sat r-sat-5">
        <circle cx="138" cy="130" r="14" fill="url(#reachSat)" />
        <circle cx="138" cy="130" r="2.6" fill="#5a2bd6" />
      </g>

      {/* particles riding outbound */}
      <circle r="1.6" fill="#5a2bd6">
        <animateMotion dur="3.4s" repeatCount="indefinite"><mpath href="#RC1" /></animateMotion>
      </circle>
      <circle r="1.6" fill="#5a2bd6">
        <animateMotion dur="4.6s" begin="0.7s" repeatCount="indefinite"><mpath href="#RC2" /></animateMotion>
      </circle>
      <circle r="1.6" fill="#7c4dff">
        <animateMotion dur="3.8s" begin="1.4s" repeatCount="indefinite"><mpath href="#RC3" /></animateMotion>
      </circle>
      <circle r="1.6" fill="#5a2bd6">
        <animateMotion dur="3s"   begin="2.1s" repeatCount="indefinite"><mpath href="#RC4" /></animateMotion>
      </circle>
      <circle r="1.6" fill="#7c4dff">
        <animateMotion dur="4.2s" begin="0.4s" repeatCount="indefinite"><mpath href="#RC5" /></animateMotion>
      </circle>

      <style>{`
        .diff-reach .r-stream { stroke-dasharray: 2 14; animation: r-flow 7s linear infinite; }
        .diff-reach .r-stream.slow { animation-duration: 11s; }
        .diff-reach .r-stream.fast { animation-duration: 5s; }
        .diff-reach .r-core { animation: r-corepulse 3.4s ease-in-out infinite; transform-origin: 50px 75px; }
        .diff-reach .r-sat { animation: r-satpulse 4s ease-in-out infinite; }
        .diff-reach .r-sat-1 { animation-delay: 0s;   transform-origin: 138px 24px; }
        .diff-reach .r-sat-2 { animation-delay: 0.8s; transform-origin: 192px 42px; }
        .diff-reach .r-sat-3 { animation-delay: 1.6s; transform-origin: 198px 80px; }
        .diff-reach .r-sat-4 { animation-delay: 2.4s; transform-origin: 184px 118px; }
        .diff-reach .r-sat-5 { animation-delay: 3.2s; transform-origin: 138px 130px; }
        @keyframes r-flow { to { stroke-dashoffset: -240; } }
        @keyframes r-corepulse {
          0%, 100% { opacity: 0.7; }
          50%      { opacity: 1; }
        }
        @keyframes r-satpulse {
          0%, 100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }
      `}</style>
    </svg>
  );
}

type OrbGlyph = "bars" | "search" | "deep" | "forecast";

const ORB_AGENTS: { angle: number; color: string; glyph: OrbGlyph; label: string }[] = [
  { angle: -90, color: "#a884ff", glyph: "bars",     label: "Finance Analyst" },
  { angle:   0, color: "#f5d04a", glyph: "search",   label: "Search" },
  { angle:  90, color: "#7b9bff", glyph: "deep",     label: "Deep Analysis" },
  { angle: 180, color: "#7fdca9", glyph: "forecast", label: "Forecast" },
];

function OrbGlyphEl({ type }: { type: OrbGlyph }) {
  if (type === "bars") {
    return (
      <g fill="#0b0b0b">
        <rect x="-9.5" y="0.5"  width="3" height="6"    rx="0.6" />
        <rect x="-4.5" y="-3.5" width="3" height="10"   rx="0.6" />
        <rect x="0.5"  y="-7"   width="3" height="13.5" rx="0.6" />
        <rect x="5.5"  y="-1"   width="3" height="7.5"  rx="0.6" />
      </g>
    );
  }
  if (type === "search") {
    return (
      <g stroke="#0b0b0b" strokeWidth="2.2" fill="none" strokeLinecap="round">
        <circle cx="-2.2" cy="-2.2" r="5.6" />
        <line x1="2.4" y1="2.4" x2="7.2" y2="7.2" />
      </g>
    );
  }
  if (type === "deep") {
    return (
      <g stroke="#0b0b0b" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M -6.5 -8 L 4 -8 L 8 -4 L 8 8 L -6.5 8 Z" strokeWidth="1.9" />
        <path d="M 4 -8 L 4 -4 L 8 -4" strokeWidth="1.6" />
        <line x1="-3.5" y1="-1"  x2="5.5" y2="-1"  strokeWidth="1.7" />
        <line x1="-3.5" y1="2.4" x2="5.5" y2="2.4" strokeWidth="1.7" />
        <line x1="-3.5" y1="5.6" x2="2"   y2="5.6" strokeWidth="1.7" />
      </g>
    );
  }
  return (
    <g fill="none" stroke="#0b0b0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M -8 5 L -3.5 1 L 0.5 3 L 7 -5.5" />
      <path d="M 3.2 -4.3 L 7 -5.5 L 6.8 -1.5" />
      <circle cx="-8" cy="5" r="1.4" fill="#0b0b0b" stroke="none" />
    </g>
  );
}

const round4 = (n: number) => Math.round(n * 10000) / 10000;

export function Orb() {
  const cx = 160;
  const cy = 160;
  const orbitR = 108;
  const coreR = 44;
  const agentR = 22;

  return (
    <div className="orb" aria-hidden="true">
      <svg className="orb-svg" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="orbCoreGrad" cx="0.38" cy="0.30" r="0.95">
            <stop offset="0%"   stopColor="#3a3a3a" />
            <stop offset="55%"  stopColor="#101010" />
            <stop offset="100%" stopColor="#020202" />
          </radialGradient>
          <linearGradient id="orbRingGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#a884ff" />
            <stop offset="33%"  stopColor="#7b9bff" />
            <stop offset="66%"  stopColor="#7fdca9" />
            <stop offset="100%" stopColor="#f5d04a" />
          </linearGradient>
          <filter id="orbCoreShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000" floodOpacity="0.28" />
          </filter>
          <filter id="orbAgentShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.22" />
          </filter>
        </defs>

        <g className="orb-dial">
          {Array.from({ length: 60 }).map((_, i) => {
            const a = (i * 360) / 60;
            const isMajor = i % 5 === 0;
            const outerR = 151;
            const innerR = isMajor ? 138 : 145;
            const rad = ((a - 90) * Math.PI) / 180;
            const x1 = round4(cx + Math.cos(rad) * outerR);
            const y1 = round4(cy + Math.sin(rad) * outerR);
            const x2 = round4(cx + Math.cos(rad) * innerR);
            const y2 = round4(cy + Math.sin(rad) * innerR);
            return (
              <line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#0f0f0f"
                strokeWidth={isMajor ? 1.4 : 0.7}
                strokeLinecap="round"
                opacity={isMajor ? 0.85 : 0.3}
              />
            );
          })}
        </g>

        <g transform={`translate(${cx} ${cy})`}>
          <g className="orb-ring-outer">
            <circle cx="0" cy="0" r="128" fill="none" stroke="url(#orbRingGrad)" strokeWidth="1.6" strokeDasharray="3 7" />
          </g>
        </g>

        <circle cx={cx} cy={cy} r={orbitR} fill="none" stroke="#a3a3a3" strokeWidth="0.6" strokeDasharray="1.5 3.5" opacity="0.55" />

        {ORB_AGENTS.map((a, i) => {
          const rad = (a.angle * Math.PI) / 180;
          const innerX = round4(cx + Math.cos(rad) * (coreR + 2));
          const innerY = round4(cy + Math.sin(rad) * (coreR + 2));
          const outerX = round4(cx + Math.cos(rad) * (orbitR - agentR - 1));
          const outerY = round4(cy + Math.sin(rad) * (orbitR - agentR - 1));
          const dur = 2.8;
          const begin = i * (dur / ORB_AGENTS.length);
          return (
            <g key={`line-${i}`}>
              <line x1={innerX} y1={innerY} x2={outerX} y2={outerY} stroke="#171717" strokeWidth="1.1" opacity="0.55" />
              <circle r="3.2" fill={a.color} stroke="#0a0a0a" strokeWidth="0.9" opacity="0">
                <animateMotion
                  dur={`${dur}s`}
                  repeatCount="indefinite"
                  begin={`${begin}s`}
                  path={`M ${innerX} ${innerY} L ${outerX} ${outerY}`}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.12;0.85;1"
                  dur={`${dur}s`}
                  begin={`${begin}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {ORB_AGENTS.map((a, i) => {
          const rad = (a.angle * Math.PI) / 180;
          const ax = round4(cx + Math.cos(rad) * orbitR);
          const ay = round4(cy + Math.sin(rad) * orbitR);
          return (
            <g key={`agent-${i}`} transform={`translate(${ax} ${ay})`}>
              <g className={`orb-agent orb-agent-${i}`}>
                <circle r={agentR + 10} fill={a.color} opacity="0.18" className="orb-halo" />
                <circle r={agentR} fill={a.color} stroke="#0a0a0a" strokeWidth="2.6" filter="url(#orbAgentShadow)" />
                <circle r={agentR - 3} fill="none" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.18" />
                <OrbGlyphEl type={a.glyph} />
              </g>
            </g>
          );
        })}

        <g transform={`translate(${cx} ${cy})`}>
          <circle cx="0" cy="0" r={coreR + 6} fill="none" stroke="#7b9bff" strokeWidth="1" opacity="0.35" className="orb-ping" />
          <circle cx="0" cy="0" r={coreR + 6} fill="none" stroke="#a884ff" strokeWidth="1" opacity="0.35" className="orb-ping orb-ping-2" />
        </g>

        <g transform={`translate(${cx} ${cy})`}>
          <g className="orb-core">
            <circle cx="0" cy="0" r={coreR} fill="url(#orbCoreGrad)" filter="url(#orbCoreShadow)" />
            <circle cx="0" cy="0" r={coreR} fill="none" stroke="#ffffff" strokeWidth="2.2" />
            <circle cx="0" cy="0" r={coreR - 6} fill="none" stroke="#ffffff" strokeWidth="0.6" opacity="0.22" />
            <g transform="translate(-26 -26) scale(0.0361)">
              <path fill="#ffffff" d={ONESTREAM_MARK_PATH} />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export function AiCluster() {
  return (
    <div className="ai-cluster">
      <img src="/assets/ai-cluster.png" alt="AI tools and OneStream agentic layer" />
    </div>
  );
}

export function SparkleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M 16 4 L 18 14 L 28 16 L 18 18 L 16 28 L 14 18 L 4 16 L 14 14 Z" fill="#7a4ed2" />
      <path d="M 24 6 L 25 10 L 29 11 L 25 12 L 24 16 L 23 12 L 19 11 L 23 10 Z" fill="#a884ff" />
    </svg>
  );
}

export function FinanceImage({ variant }: { variant: "video" | "cta" }) {
  if (variant === "video") {
    return (
      <div className="thumb thumb-video">
        <img src="/assets/hero-video.jpg" alt="Product demo preview" />
      </div>
    );
  }
  return (
    <div className="thumb thumb-cta">
      <img src="/assets/cta-photo.jpg" alt="Take finance further" />
    </div>
  );
}

export function GovernanceShot() {
  return (
    <div className="gov-shot">
      <img src="/assets/gov-shot.png" alt="Agentic platform interface" />
    </div>
  );
}

type AgentTone = "purple" | "yellow" | "blue" | "green";

type AgentCardProps = {
  tone: AgentTone;
  label?: string;
  accent?: string;
  footer?: string;
};

export function AgentCard({ tone, label, footer }: AgentCardProps) {
  return (
    <div className={`agent-card tone-${tone}`}>
      <div className="agent-art-frame">
        {tone === "purple" && <FinanceAnalystArt />}
        {tone === "yellow" && <SearchArt />}
        {tone === "blue" && <DeepAnalysisArt />}
        {tone === "green" && <ForecastArt />}
        {label && <span className="agent-art-label">{label}</span>}
        {footer && <span className="agent-art-footer">{footer}</span>}
      </div>
    </div>
  );
}

function FinanceAnalystArt() {
  return (
    <svg className="aa-svg" viewBox="0 0 420 420" role="img" aria-label="Finance Analyst: variance analysis with drill-down and audit trail">
      <defs>
        <linearGradient id="aaPurpleBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f7f1ff" />
          <stop offset="1" stopColor="#e8dcff" />
        </linearGradient>
        <linearGradient id="aaPurpleBar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a884ff" />
          <stop offset="1" stopColor="#6a3fd6" />
        </linearGradient>
        <linearGradient id="aaPurpleBarSoft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d6c5ff" />
          <stop offset="1" stopColor="#a884ff" />
        </linearGradient>
      </defs>
      <rect width="420" height="420" fill="url(#aaPurpleBg)" />

      {/* Prompt chip */}
      <g className="aa-fa-prompt">
        <rect x="28" y="32" width="282" height="46" rx="23" fill="#ffffff" stroke="rgba(108,64,212,0.18)" />
        <g transform="translate(46 55)">
          <path className="aa-fa-spark" d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill="#7c4dff" />
        </g>
        <rect x="70" y="48" width="200" height="6" rx="3" fill="#d8ccf0" />
        <rect x="70" y="60" width="138" height="6" rx="3" fill="#ece3fa" />
      </g>

      {/* Variance chart */}
      <g transform="translate(28 110)">
        <line x1="0" y1="170" x2="364" y2="170" stroke="rgba(80,40,160,0.2)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="0" y1="120" x2="364" y2="120" stroke="rgba(80,40,160,0.07)" strokeWidth="1" strokeDasharray="3 4" />
        <line x1="0" y1="70" x2="364" y2="70" stroke="rgba(80,40,160,0.07)" strokeWidth="1" strokeDasharray="3 4" />
        <line x1="0" y1="20" x2="364" y2="20" stroke="rgba(80,40,160,0.07)" strokeWidth="1" strokeDasharray="3 4" />

        <g className="aa-fa-bars">
          <rect className="aa-fa-bar aa-fa-b1" x="20" width="36" height="100" rx="5" fill="url(#aaPurpleBarSoft)" />
          <rect className="aa-fa-bar aa-fa-b2" x="76" width="36" height="120" rx="5" fill="url(#aaPurpleBarSoft)" />
          <rect className="aa-fa-bar aa-fa-b3 aa-fa-anomaly" x="132" width="36" height="160" rx="5" fill="url(#aaPurpleBar)" />
          <rect className="aa-fa-bar aa-fa-b4" x="188" width="36" height="86" rx="5" fill="url(#aaPurpleBarSoft)" />
          <rect className="aa-fa-bar aa-fa-b5" x="244" width="36" height="68" rx="5" fill="url(#aaPurpleBarSoft)" />
          <rect className="aa-fa-bar aa-fa-b6" x="300" width="36" height="104" rx="5" fill="url(#aaPurpleBarSoft)" />
        </g>

        {/* Anomaly callout */}
        <g className="aa-fa-callout" transform="translate(150 -8)">
          <rect width="68" height="22" rx="11" fill="#7c4dff" />
          <text x="34" y="15" fontSize="11" fontWeight="800" fill="#fff" textAnchor="middle">+24%</text>
        </g>
      </g>

      {/* Drill-down panel */}
      <g transform="translate(28 304)" className="aa-fa-drill">
        <rect width="364" height="88" rx="14" fill="#ffffff" stroke="rgba(108,64,212,0.15)" />
        <text x="16" y="22" fontSize="10" fontWeight="800" fill="#5a2bd6" letterSpacing="0.5">DRILL → DEPARTMENTS</text>
        <g transform="translate(16 32)">
          <rect className="aa-fa-mini aa-fa-m1" width="80" height="8" rx="4" fill="#7c4dff" />
          <rect className="aa-fa-mini aa-fa-m2" y="14" width="56" height="8" rx="4" fill="#a884ff" />
          <rect className="aa-fa-mini aa-fa-m3" y="28" width="100" height="8" rx="4" fill="#c8b0ff" />
          <rect className="aa-fa-mini aa-fa-m4" y="42" width="40" height="8" rx="4" fill="#d8ccf0" />
        </g>
        {/* Trace */}
        <g transform="translate(180 50)" className="aa-fa-trace">
          <path d="M0 0 L90 0" stroke="#a884ff" strokeWidth="1.5" strokeDasharray="2 4" />
          <circle r="3.5" fill="#7c4dff" />
          <circle cx="30" r="3.5" fill="#7c4dff" />
          <circle cx="60" r="3.5" fill="#7c4dff" />
          <circle cx="90" r="3.5" fill="#7c4dff" />
        </g>
        {/* Audit badge */}
        <g transform="translate(294 22)">
          <rect width="56" height="48" rx="10" fill="#f4edff" />
          <text x="28" y="18" fontSize="9" fontWeight="800" fill="#5a2bd6" textAnchor="middle">AUDIT</text>
          <path className="aa-fa-check" d="M16 30 L25 38 L42 24" stroke="#5a2bd6" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </svg>
  );
}

function SearchArt() {
  return (
    <svg className="aa-svg" viewBox="0 0 420 420" role="img" aria-label="Search agent: unifying scattered finance knowledge into one trusted answer">
      <defs>
        <linearGradient id="aaYellowBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff8e0" />
          <stop offset="1" stopColor="#ffeab0" />
        </linearGradient>
        <radialGradient id="aaBeam" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff7c2" stopOpacity="0.95" />
          <stop offset="1" stopColor="#fff7c2" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="420" height="420" fill="url(#aaYellowBg)" />

      {/* Floating doc tiles */}
      <g className="aa-sr-docs">
        <g className="aa-sr-doc aa-sr-d1" transform="translate(50 78)">
          <rect width="92" height="116" rx="8" fill="#ffffff" stroke="rgba(160,120,0,0.18)" />
          <rect x="10" y="10" width="44" height="8" rx="4" fill="#e6a900" />
          <rect x="10" y="26" width="72" height="5" rx="2.5" fill="#f0d97c" />
          <rect x="10" y="36" width="64" height="5" rx="2.5" fill="#f0d97c" />
          <rect x="10" y="46" width="68" height="5" rx="2.5" fill="#f0d97c" />
          <rect x="10" y="56" width="50" height="5" rx="2.5" fill="#f0d97c" />
          <text x="46" y="98" fontSize="9" fontWeight="800" fill="#7a5c00" textAnchor="middle">POLICY</text>
        </g>
        <g className="aa-sr-doc aa-sr-d2" transform="translate(278 60)">
          <rect width="92" height="116" rx="8" fill="#ffffff" stroke="rgba(160,120,0,0.18)" />
          <rect x="10" y="10" width="50" height="8" rx="4" fill="#e6a900" />
          <rect x="10" y="26" width="72" height="5" rx="2.5" fill="#f0d97c" />
          <rect x="10" y="36" width="58" height="5" rx="2.5" fill="#f0d97c" />
          <rect x="10" y="46" width="68" height="5" rx="2.5" fill="#f0d97c" />
          <rect x="10" y="56" width="44" height="5" rx="2.5" fill="#f0d97c" />
          <text x="46" y="98" fontSize="9" fontWeight="800" fill="#7a5c00" textAnchor="middle">SOP</text>
        </g>
        <g className="aa-sr-doc aa-sr-d3" transform="translate(36 246)">
          <rect width="92" height="116" rx="8" fill="#ffffff" stroke="rgba(160,120,0,0.18)" />
          <rect x="10" y="10" width="40" height="8" rx="4" fill="#e6a900" />
          <rect x="10" y="26" width="72" height="5" rx="2.5" fill="#f0d97c" />
          <rect x="10" y="36" width="64" height="5" rx="2.5" fill="#f0d97c" />
          <rect x="10" y="46" width="56" height="5" rx="2.5" fill="#f0d97c" />
          <text x="46" y="98" fontSize="9" fontWeight="800" fill="#7a5c00" textAnchor="middle">EMAIL</text>
        </g>
        <g className="aa-sr-doc aa-sr-d4" transform="translate(290 260)">
          <rect width="92" height="116" rx="8" fill="#ffffff" stroke="rgba(160,120,0,0.18)" />
          <rect x="10" y="10" width="60" height="8" rx="4" fill="#e6a900" />
          <rect x="10" y="26" width="68" height="5" rx="2.5" fill="#f0d97c" />
          <rect x="10" y="36" width="72" height="5" rx="2.5" fill="#f0d97c" />
          <rect x="10" y="46" width="50" height="5" rx="2.5" fill="#f0d97c" />
          <text x="46" y="98" fontSize="9" fontWeight="800" fill="#7a5c00" textAnchor="middle">SHAREPT</text>
        </g>
      </g>

      {/* Search beam */}
      <g className="aa-sr-beam">
        <circle cx="0" cy="0" r="80" fill="url(#aaBeam)" />
      </g>

      {/* Center answer card */}
      <g className="aa-sr-answer" transform="translate(210 210)">
        <g transform="translate(-92 -56)">
          <rect width="184" height="112" rx="16" fill="#ffffff" stroke="rgba(160,120,0,0.25)" filter="" />
          {/* Search bar inside */}
          <rect x="14" y="14" width="156" height="22" rx="11" fill="#fff5cf" />
          <g transform="translate(24 25)">
            <circle r="5" fill="none" stroke="#a87f00" strokeWidth="1.6" />
            <path d="M3.5 3.5 L7 7" stroke="#a87f00" strokeWidth="1.6" strokeLinecap="round" />
          </g>
          <rect x="44" y="22" width="86" height="6" rx="3" fill="#ddb946" />
          {/* Divider */}
          <line x1="14" y1="48" x2="170" y2="48" stroke="rgba(160,120,0,0.15)" strokeWidth="1" />
          {/* Answer */}
          <g className="aa-sr-check" transform="translate(24 70)">
            <circle r="11" fill="#f5d04a" />
            <path d="M-5 0 L-1 5 L6 -3" stroke="#1a1108" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <rect x="50" y="64" width="116" height="6" rx="3" fill="#9c7800" />
          <rect x="50" y="76" width="92" height="6" rx="3" fill="#d4ad36" />
        </g>
      </g>

      {/* Magnifying glass */}
      <g className="aa-sr-mag">
        <g transform="translate(-2 -2)">
          <circle r="26" fill="rgba(255,255,255,0.4)" stroke="#7a5400" strokeWidth="4" />
          <circle r="26" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
          <path d="M18 18 L34 34" stroke="#7a5400" strokeWidth="5" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}

function DeepAnalysisArt() {
  return (
    <svg className="aa-svg" viewBox="0 0 420 420" role="img" aria-label="Deep Analysis: scanning dense documents and extracting key terms to structured output">
      <defs>
        <linearGradient id="aaBlueBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#eef3ff" />
          <stop offset="1" stopColor="#dde6ff" />
        </linearGradient>
        <linearGradient id="aaScan" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7b9bff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#7b9bff" stopOpacity="0.85" />
          <stop offset="1" stopColor="#7b9bff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="420" height="420" fill="url(#aaBlueBg)" />

      {/* Document stack */}
      <g transform="translate(36 50)">
        <g transform="translate(14 14) rotate(-3 80 130)">
          <rect width="170" height="280" rx="10" fill="#ffffff" stroke="rgba(60,80,180,0.16)" />
        </g>
        <g transform="rotate(2 85 140)">
          <rect width="170" height="280" rx="10" fill="#ffffff" stroke="rgba(60,80,180,0.18)" />
          {/* Document content lines */}
          <g transform="translate(18 24)" className="aa-da-lines">
            <rect width="100" height="9" rx="4" fill="#3f57bf" />
            <rect y="20" width="134" height="5" rx="2.5" fill="#b6c2ee" />
            <rect y="32" width="120" height="5" rx="2.5" fill="#b6c2ee" />
            <rect className="aa-da-term aa-da-t1" y="44" width="76" height="11" rx="3" fill="#fff19b" stroke="#d6b820" strokeWidth="1" />
            <rect x="84" y="44" width="46" height="5" rx="2.5" fill="#b6c2ee" />
            <rect y="62" width="130" height="5" rx="2.5" fill="#b6c2ee" />
            <rect y="74" width="120" height="5" rx="2.5" fill="#b6c2ee" />
            <rect y="86" width="110" height="5" rx="2.5" fill="#b6c2ee" />
            <rect className="aa-da-term aa-da-t2" y="100" width="58" height="11" rx="3" fill="#fff19b" stroke="#d6b820" strokeWidth="1" />
            <rect x="66" y="100" width="62" height="5" rx="2.5" fill="#b6c2ee" />
            <rect y="118" width="124" height="5" rx="2.5" fill="#b6c2ee" />
            <rect y="130" width="118" height="5" rx="2.5" fill="#b6c2ee" />
            <rect y="142" width="100" height="5" rx="2.5" fill="#b6c2ee" />
            <rect className="aa-da-term aa-da-t3" y="156" width="92" height="11" rx="3" fill="#fff19b" stroke="#d6b820" strokeWidth="1" />
            <rect y="174" width="128" height="5" rx="2.5" fill="#b6c2ee" />
            <rect y="186" width="116" height="5" rx="2.5" fill="#b6c2ee" />
            <rect y="200" width="120" height="5" rx="2.5" fill="#b6c2ee" />
            <rect y="212" width="100" height="5" rx="2.5" fill="#b6c2ee" />
            <rect y="224" width="110" height="5" rx="2.5" fill="#b6c2ee" />
          </g>
          {/* Scan line */}
          <g className="aa-da-scan">
            <rect x="-4" width="178" height="22" rx="2" fill="url(#aaScan)" opacity="0.65" />
            <line x1="-4" x2="174" y1="22" y2="22" stroke="#3f57bf" strokeWidth="1.5" />
          </g>
        </g>
      </g>

      {/* Output panel on right */}
      <g transform="translate(232 70)" className="aa-da-output">
        <rect width="156" height="280" rx="14" fill="#ffffff" stroke="rgba(60,80,180,0.22)" />
        <rect x="0" y="0" width="156" height="36" rx="14" fill="#7b9bff" />
        <rect x="0" y="22" width="156" height="14" fill="#7b9bff" />
        <text x="14" y="23" fontSize="10" fontWeight="800" fill="#fff" letterSpacing="0.5">EXTRACTED</text>

        {/* Rows */}
        <g transform="translate(14 50)">
          <g className="aa-da-row aa-da-r1">
            <rect width="128" height="34" rx="6" fill="#f1f4ff" />
            <rect x="8" y="6" width="64" height="6" rx="3" fill="#3f57bf" />
            <rect x="8" y="18" width="92" height="5" rx="2.5" fill="#a8b6e6" />
            <circle cx="118" cy="17" r="6" fill="#7fdca9" />
            <path d="M115 17 L117 19 L122 14" stroke="#1a3a26" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g className="aa-da-row aa-da-r2" transform="translate(0 42)">
            <rect width="128" height="34" rx="6" fill="#f1f4ff" />
            <rect x="8" y="6" width="50" height="6" rx="3" fill="#3f57bf" />
            <rect x="8" y="18" width="86" height="5" rx="2.5" fill="#a8b6e6" />
            <circle cx="118" cy="17" r="6" fill="#7fdca9" />
            <path d="M115 17 L117 19 L122 14" stroke="#1a3a26" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g className="aa-da-row aa-da-r3" transform="translate(0 84)">
            <rect width="128" height="34" rx="6" fill="#f1f4ff" />
            <rect x="8" y="6" width="70" height="6" rx="3" fill="#3f57bf" />
            <rect x="8" y="18" width="80" height="5" rx="2.5" fill="#a8b6e6" />
            <circle cx="118" cy="17" r="6" fill="#7fdca9" />
            <path d="M115 17 L117 19 L122 14" stroke="#1a3a26" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g className="aa-da-row aa-da-r4" transform="translate(0 126)">
            <rect width="128" height="34" rx="6" fill="#f1f4ff" />
            <rect x="8" y="6" width="58" height="6" rx="3" fill="#3f57bf" />
            <rect x="8" y="18" width="92" height="5" rx="2.5" fill="#a8b6e6" />
            <circle cx="118" cy="17" r="6" fill="#7fdca9" />
            <path d="M115 17 L117 19 L122 14" stroke="#1a3a26" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </g>

      {/* Flying terms (extract motion) */}
      <g className="aa-da-fly aa-da-fly1">
        <rect width="44" height="14" rx="3" fill="#fff19b" stroke="#d6b820" strokeWidth="1" />
      </g>
      <g className="aa-da-fly aa-da-fly2">
        <rect width="44" height="14" rx="3" fill="#fff19b" stroke="#d6b820" strokeWidth="1" />
      </g>
      <g className="aa-da-fly aa-da-fly3">
        <rect width="44" height="14" rx="3" fill="#fff19b" stroke="#d6b820" strokeWidth="1" />
      </g>
    </svg>
  );
}

function ForecastArt() {
  return (
    <svg className="aa-svg" viewBox="0 0 420 420" role="img" aria-label="Forecast: actuals draw forward into projected scenarios with best, base, and worst cases">
      <defs>
        <linearGradient id="aaGreenBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ecfbf3" />
          <stop offset="1" stopColor="#d5f3e2" />
        </linearGradient>
        <linearGradient id="aaActuals" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3a8c63" />
          <stop offset="1" stopColor="#2bb677" />
        </linearGradient>
      </defs>
      <rect width="420" height="420" fill="url(#aaGreenBg)" />

      {/* Header chip */}
      <g className="aa-fc-prompt">
        <rect x="28" y="30" width="222" height="36" rx="18" fill="#ffffff" stroke="rgba(40,140,90,0.22)" />
        <circle cx="48" cy="48" r="5" fill="#2bb677" />
        <rect x="62" y="40" width="64" height="6" rx="3" fill="#3a8c63" />
        <rect x="62" y="50" width="120" height="6" rx="3" fill="#a8d9c0" />
        <g transform="translate(208 48)">
          <rect x="-12" y="-10" width="34" height="20" rx="10" fill="#7fdca9" />
          <text x="5" y="4" fontSize="10" fontWeight="800" fill="#0e3a25" textAnchor="middle">+18%</text>
        </g>
      </g>

      {/* Chart panel */}
      <g transform="translate(32 92)">
        <rect width="356" height="252" rx="16" fill="#ffffff" stroke="rgba(40,140,90,0.18)" />
        {/* Grid */}
        <g stroke="rgba(40,140,90,0.10)" strokeWidth="1">
          <line x1="20" y1="46" x2="336" y2="46" />
          <line x1="20" y1="92" x2="336" y2="92" />
          <line x1="20" y1="138" x2="336" y2="138" />
          <line x1="20" y1="184" x2="336" y2="184" />
        </g>
        <line x1="20" y1="218" x2="336" y2="218" stroke="rgba(40,140,90,0.32)" strokeWidth="1.5" strokeLinecap="round" />

        {/* Quarter labels */}
        <g fill="#5b9d7a" fontSize="9" fontWeight="700" letterSpacing="0.5">
          <text x="46" y="234">Q1</text>
          <text x="106" y="234">Q2</text>
          <text x="166" y="234" textAnchor="middle">Q3</text>
          <text x="226" y="234" textAnchor="middle">Q4</text>
          <text x="286" y="234" textAnchor="middle">Q1+1</text>
        </g>

        {/* Past separator */}
        <line className="aa-fc-divider" x1="190" y1="32" x2="190" y2="216" stroke="#2bb677" strokeWidth="1.4" strokeDasharray="3 4" />
        <text x="190" y="26" fontSize="9" fontWeight="800" fill="#1f6e48" textAnchor="middle">NOW</text>

        {/* Actuals area */}
        <path
          className="aa-fc-area"
          d="M30 178 L70 162 L110 168 L150 138 L190 124 L190 218 L30 218 Z"
          fill="url(#aaActuals)"
          opacity="0.18"
        />

        {/* Actuals line */}
        <path
          className="aa-fc-actuals"
          d="M30 178 L70 162 L110 168 L150 138 L190 124"
          fill="none"
          stroke="url(#aaActuals)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Forecast scenarios */}
        <path
          className="aa-fc-best"
          d="M190 124 L230 100 L270 78 L310 54"
          fill="none"
          stroke="#7fdca9"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="6 4"
        />
        <path
          className="aa-fc-base"
          d="M190 124 L230 116 L270 104 L310 88"
          fill="none"
          stroke="#2bb677"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="6 4"
        />
        <path
          className="aa-fc-worst"
          d="M190 124 L230 138 L270 144 L310 162"
          fill="none"
          stroke="#9bbfae"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="6 4"
        />

        {/* Now pulse */}
        <g transform="translate(190 124)">
          <circle className="aa-fc-pulse" r="8" fill="#7fdca9" />
          <circle r="5" fill="#fff" stroke="#1f6e48" strokeWidth="2" />
        </g>

        {/* Scenario badges */}
        <g className="aa-fc-tag aa-fc-tag1" transform="translate(316 54)">
          <rect x="-6" y="-8" width="32" height="16" rx="8" fill="#1f6e48" />
          <text x="10" y="3" fontSize="8" fontWeight="800" fill="#dffeed" textAnchor="middle">BEST</text>
        </g>
        <g className="aa-fc-tag aa-fc-tag2" transform="translate(316 88)">
          <rect x="-6" y="-8" width="32" height="16" rx="8" fill="#2bb677" />
          <text x="10" y="3" fontSize="8" fontWeight="800" fill="#fff" textAnchor="middle">BASE</text>
        </g>
        <g className="aa-fc-tag aa-fc-tag3" transform="translate(316 162)">
          <rect x="-6" y="-8" width="34" height="16" rx="8" fill="#7a9a8b" />
          <text x="11" y="3" fontSize="8" fontWeight="800" fill="#fff" textAnchor="middle">WORST</text>
        </g>
      </g>
    </svg>
  );
}

const BADGE_IMGS = [
  "/assets/badge-gartner.jpg",
  "/assets/badge-barc.png",
  "/assets/badge-isg.png",
  "/assets/badge-hackett.png",
  "/assets/badge-g2-top50.jpg",
  "/assets/badge-g2-rec.png",
];

export function AwardBadges() {
  return (
    <div className="awards-row">
      {BADGE_IMGS.map((src, i) => (
        <div key={i} className="award">
          <img src={src} alt="" />
        </div>
      ))}
    </div>
  );
}

export function ResourceCardDark({
  title,
  cta,
  image,
}: {
  title: string;
  cta: string;
  image: string;
}) {
  return (
    <article className="res-card res-dark">
      <div className="res-image">
        <img src={image} alt="" />
      </div>
      <div className="res-body">
        <p>{title}</p>
        <button className="btn dark">{cta}</button>
      </div>
    </article>
  );
}

export function ResourceCardLight({
  title,
  cta,
  image,
}: {
  title: string;
  cta: string;
  image: string;
}) {
  return (
    <article className="res-card res-light">
      <div className="res-image">
        <img src={image} alt="" />
      </div>
      <div className="res-body">
        <p>{title}</p>
        <button className="btn dark">{cta}</button>
      </div>
    </article>
  );
}

export function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.5.6c-1 .3-1.7 1.1-2 2.1C0 8 0 12 0 12s0 4 .5 5.8c.3 1 1 1.8 2 2.1 1.8.6 9.5.6 9.5.6s7.7 0 9.5-.6c1-.3 1.7-1.1 2-2.1.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.5 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z" />
    </svg>
  );
}

export function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.83l4.713 6.231 5.447-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.5 18V10.5h-3V18h3zM7 9.3a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zm11 8.7v-4.5c0-2.4-1.3-3.5-3-3.5-1.4 0-2 .8-2.3 1.3v-1.1h-2.5c0 .7 0 7.6 0 7.6h2.5v-4.2c0-.2 0-.5.1-.6.2-.5.6-1 1.4-1 1 0 1.4.8 1.4 1.9V18H18z" />
    </svg>
  );
}

export type { ReactNode };
