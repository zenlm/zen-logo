# @zenlm/logo

Official Zen AI logo package with React components and utilities.

## Logo

The Zen logo is an upward-pointing triangle (▲), representing:
- **Clarity** - Clear, focused intelligence
- **Ascension** - Rising toward enlightenment
- **Convergence** - Ideas meeting at a point

## Installation

```bash
npm install @zenlm/logo
```

## Usage

### React Component

```tsx
import { ZenLogo, ZenLogoWhite, ZenLogoBlack } from '@zenlm/logo';

// Inherits current text color
<ZenLogo size={32} />

// Explicit colors
<ZenLogoWhite size={32} />  // For dark backgrounds
<ZenLogoBlack size={32} />  // For light backgrounds

// Custom color
<ZenLogo size={32} color="#333" />
```

### Raw SVG

```typescript
import {
  zenLogo,           // currentColor SVG string
  zenLogoWhite,      // White fill SVG string
  zenLogoBlack,      // Black fill SVG string
  ZEN_LOGO_PATH,     // SVG path for custom embedding
  ZEN_LOGO_VIEWBOX   // ViewBox string "0 0 100 100"
} from '@zenlm/logo';
```

### Data URLs (for CSS/backgrounds)

```typescript
import {
  zenLogoDataUrl,
  zenLogoWhiteDataUrl,
  zenLogoBlackDataUrl
} from '@zenlm/logo';

// Use in CSS
const styles = {
  backgroundImage: `url(${zenLogoWhiteDataUrl})`
};
```

### Dynamic Generation

```typescript
import { getLogo, getLogoDataUrl } from '@zenlm/logo';

// Get SVG string
const svg = getLogo({ variant: 'white' });

// Get data URL
const dataUrl = getLogoDataUrl({ variant: 'black', format: 'dataUrl' });
```

## Variants

| Variant | Use Case |
|---------|----------|
| `mono` | Inherits `currentColor`, adapts to text color |
| `white` | Dark backgrounds |
| `black` | Light backgrounds |

## SVG Path

For custom implementations:

```
M50 10 L90 85 L10 85 Z
```

ViewBox: `0 0 100 100`

## License

MIT - Zen LM / Hanzo AI
