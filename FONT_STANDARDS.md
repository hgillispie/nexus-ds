# Font Standards

## Primary Font: Inter

All components in this design system use **Inter** as the primary font family.

## Font Stack

Use this standardized font stack in all CSS files:

```css
font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

## Implementation

### Global Import

The Inter font is imported globally in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
```

### Font Weights Available

- **100**: Thin
- **200**: Extra Light  
- **300**: Light
- **400**: Regular (default)
- **500**: Medium
- **600**: Semi Bold
- **700**: Bold
- **800**: Extra Bold
- **900**: Black

### Usage Guidelines

1. **Body text**: Use `font-weight: 400` (Regular)
2. **Headings**: Use `font-weight: 600` (Semi Bold) or `font-weight: 700` (Bold)
3. **Captions/Labels**: Use `font-weight: 500` (Medium)
4. **Buttons**: Use `font-weight: 600` (Semi Bold)
5. **Form inputs**: Use `font-weight: 400` (Regular)

### Component CSS Requirements

#### For new components:

1. **Option A: Inherit globally** (recommended)
   - Don't specify font-family in component CSS
   - Inherit from global styles automatically

2. **Option B: Explicit declaration** (only if needed)
   - Use the standard font stack:
   ```css
   .my-component {
     font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
   }
   ```

### Storybook Configuration

Storybook is configured to use Inter font through:
- Import of `src/index.css` in `.storybook/preview.ts`
- Font family toolbar control for testing

### Testing

To verify Inter font is loading:
1. Open browser DevTools
2. Check Network tab for Google Fonts requests
3. Inspect computed styles to confirm font-family
4. Use font-display detector extensions

### Fallback Strategy

The font stack provides these fallbacks:
1. **Inter** (primary)
2. **-apple-system** (macOS system font)
3. **BlinkMacSystemFont** (macOS Chrome system font)
4. **Segoe UI** (Windows system font)
5. **Roboto** (Android system font)
6. **Helvetica Neue** (older macOS)
7. **Arial** (universal fallback)
8. **sans-serif** (generic fallback)

### Performance Considerations

- Font is loaded with `display=swap` for better performance
- All weights are loaded upfront to prevent layout shifts
- Font files are cached by Google Fonts CDN

## DO NOT USE

❌ **Avoid these fonts:**
- Nunito Sans (legacy)
- Open Sans (available but deprecated)
- System fonts without Inter
- Font stacks missing Inter as primary

## Questions?

For questions about font implementation, refer to this document or check existing component implementations in `src/stories/`.
