export type LogoVariant = 'mono' | 'white' | 'black';
export type LogoFormat = 'svg' | 'dataUrl' | 'base64';

export interface LogoOptions {
  variant?: LogoVariant;
  format?: LogoFormat;
}

export interface LogoSettings {
  viewBox: string;
  path: string;
}
