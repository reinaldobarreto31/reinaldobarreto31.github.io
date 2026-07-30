import { SVGProps } from "react";

/**
 * Java-style coffee cup icon — faithful to the classic Java logo silhouette.
 * Uses `currentColor` so it inherits text color from the parent.
 */
export function JavaIcon({ size = 24, className = "", ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      viewBox="0 0 32 36"
      width={size}
      height={size}
      fill="currentColor"
      aria-label="Java"
      className={className}
      {...props}
    >
      {/* Steam left */}
      <path d="M9 7 C8 5 10 3 9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* Steam center */}
      <path d="M14 7 C13 5 15 3 14 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      {/* Steam right */}
      <path d="M19 7 C18 5 20 3 19 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />

      {/* Cup body */}
      <path d="M6 10 L8.5 28 C8.7 29.2 9.8 30 11 30 L21 30 C22.2 30 23.3 29.2 23.5 28 L26 10 Z" />

      {/* Handle */}
      <path
        d="M23.5 15 C28 15 30 18 30 21 C30 24 28 27 23.5 27"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Saucer */}
      <ellipse cx="16" cy="31" rx="12" ry="2.2" opacity="0.55" />
    </svg>
  );
}
