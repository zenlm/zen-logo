import * as React from 'react';
import { ZEN_LOGO_PATH, ZEN_LOGO_VIEWBOX } from './logos';

export interface ZenLogoProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Zen Logo React Component
 * Uses currentColor by default for easy theming
 */
export function ZenLogo({
  size = 24,
  color = 'currentColor',
  className = '',
  style = {}
}: ZenLogoProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox={ZEN_LOGO_VIEWBOX}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label="Zen Logo"
    >
      <path d={ZEN_LOGO_PATH} fill={color} />
    </svg>
  );
}

/**
 * Zen Logo with white fill (for dark backgrounds)
 */
export function ZenLogoWhite(props: Omit<ZenLogoProps, 'color'>): JSX.Element {
  return <ZenLogo {...props} color="white" />;
}

/**
 * Zen Logo with black fill (for light backgrounds)
 */
export function ZenLogoBlack(props: Omit<ZenLogoProps, 'color'>): JSX.Element {
  return <ZenLogo {...props} color="black" />;
}

export default ZenLogo;
