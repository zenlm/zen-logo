import type { LogoOptions } from './types';

// Zen Logo: Upward-pointing triangle (▲) - symbol of clarity, ascension, focus
// The triangle represents: enlightenment rising, convergence of intelligence

/**
 * Generate black SVG logo (for light backgrounds)
 */
export function getBlackSVG(): string {
  return `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 10 L90 85 L10 85 Z" fill="black"/>
</svg>`;
}

/**
 * Generate white SVG logo (for dark backgrounds)
 */
export function getWhiteSVG(): string {
  return `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 10 L90 85 L10 85 Z" fill="white"/>
</svg>`;
}

/**
 * Generate monochrome SVG logo (uses currentColor)
 */
export function getMonoSVG(): string {
  return `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 10 L90 85 L10 85 Z" fill="currentColor"/>
</svg>`;
}

/**
 * Get logo as data URL
 */
export function getLogoDataUrl(options: LogoOptions = {}): string {
  const { variant = 'mono' } = options;
  let svg = '';

  switch (variant) {
    case 'white':
      svg = getWhiteSVG();
      break;
    case 'black':
      svg = getBlackSVG();
      break;
    default:
      svg = getMonoSVG();
  }

  const base64 = btoa(unescape(encodeURIComponent(svg)));
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Get logo as base64 string
 */
export function getLogoBase64(options: LogoOptions = {}): string {
  const { variant = 'mono' } = options;
  let svg = '';

  switch (variant) {
    case 'white':
      svg = getWhiteSVG();
      break;
    case 'black':
      svg = getBlackSVG();
      break;
    default:
      svg = getMonoSVG();
  }

  return btoa(unescape(encodeURIComponent(svg)));
}

/**
 * Get logo in requested format
 */
export function getLogo(options: LogoOptions = {}): string {
  const { variant = 'mono', format = 'svg' } = options;

  switch (format) {
    case 'dataUrl':
      return getLogoDataUrl({ variant });
    case 'base64':
      return getLogoBase64({ variant });
    default:
      switch (variant) {
        case 'white':
          return getWhiteSVG();
        case 'black':
          return getBlackSVG();
        default:
          return getMonoSVG();
      }
  }
}

// Export pre-generated versions for convenience
export const zenLogo = getMonoSVG();
export const zenLogoBlack = getBlackSVG();
export const zenLogoWhite = getWhiteSVG();
export const zenLogoDataUrl = getLogoDataUrl();
export const zenLogoBlackDataUrl = getLogoDataUrl({ variant: 'black' });
export const zenLogoWhiteDataUrl = getLogoDataUrl({ variant: 'white' });

// SVG path for embedding
export const ZEN_LOGO_PATH = 'M50 10 L90 85 L10 85 Z';
export const ZEN_LOGO_VIEWBOX = '0 0 100 100';
